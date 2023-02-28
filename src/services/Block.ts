/* eslint-disable class-methods-use-this */
import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';
import EventBus from './EventBus';

type Props<P extends Record<string, any> = any> = { events? : Record<string, () => void> } & P;
class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private eventBus: EventBus;

  protected element: HTMLElement | null = null;

  private meta: { tagName: string; props: P };

  protected props: Props<P>;

  public id: string = '';

  public children: Record<string, Block>;

  constructor(tagName = 'div', propsAndChilds: Props<P> = {} as Props<P>) {
    const { children, props } = this._getChildren(propsAndChilds);
    this.eventBus = new EventBus();

    this.meta = {
      tagName,
      props,
    };

    this.id = makeUUID();
    this.children = this._makePropsProxy(children);
    this.props = this._makePropsProxy({ ...props, _id: this.id });
    this._registerEvents();
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents() {
    this.eventBus.on(Block.EVENTS.INIT, this.init.bind(this));

    this.eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    this.eventBus.on(
      Block.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this)
    );
  }

  /* создает обертку и вызывает первый рендер */
  init() {
    this.element = this._createDocumentElement(this.meta.tagName);

    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  private _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this.id);
    return element;
  }

  private _componentDidMount() {
    this.componentDidMount();
    Object.values(this.children).forEach((child) => child.dispatchComponentDidMount());
  }

  componentDidMount() {}

  /* вызываем ее снаружи после того, как добавили блок на страницу, чтобы опредлить появился блок на странице или нет */

  dispatchComponentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    if (Object.keys(this.children).length) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidUpdate(oldProps: P, newProps: P) {
    if (oldProps === newProps) {
      return false;
    }
    return true;
  }

  /* изменить пропсы */
  setProps = (newProps: P) => {
    if (!newProps) {
      return;
    }

    const { children, props } = this._getChildren(newProps);

    if (Object.values(children).length) {
      Object.assign(this.children, children);
    }
    if (Object.values(props).length) {
      Object.assign(this.props, props);
    }
  };

  get elem() {
    return this.element;
  }

  private _render() {
    const block = this.render();
    this.removeEvents();
    if (this.element) {
      this.element.innerHTML = '';
      this.element.append(block);
    }
    this.addEvents();
    this.addAttribute();
  }

  /* в каждом компоненте  мы переопределяем этот метод и возвращаем строку через handlebars */
  render() {
    return '';
  }

  getContent() {
    return this.element;
  }

  private _makePropsProxy(props: P) {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop as string];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldValue = { ...target };
        target[prop as keyof Props<P>] = value;
        self.eventBus.emit(Block.EVENTS.FLOW_CDU, oldValue, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  show() {
    const el = this.getContent();
    if (el) {
      el.style.display = 'block';
    }
  }

  hide() {
    const el = this.getContent();
    if (el) {
      el.style.display = 'none';
    }
  }

  private addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      if (this.element) {
        this.element.addEventListener(eventName, events[eventName]);
      }
    });
  }

  removeEvents() {
    if (this.props?.events) {
      const { events = {} } = this.props;

      Object.keys(events).forEach((eventName) => {
        if (this.element) {
          this.element.removeEventListener(eventName, events[eventName]);
        }
      });
    }
  }

  addAttribute() {
    const { attr } = this.props;

    Object.entries(attr).forEach(([key, value]) => {
      if (this.element) {
        this.element.setAttribute(key, value as string);
      }
    });
  }

  _getChildren(propsAndChilds: Props<P>): {
    props: Props<P>;
    children: Record<string, Block>;
  } {
    const children: Record<string, Block> = {};
    const props = {} as Record<string, unknown>;

    Object.keys(propsAndChilds).forEach((key) => {
      if (propsAndChilds[key] instanceof Block) {
        children[key] = propsAndChilds[key];
      } else {
        props[key] = propsAndChilds[key];
      }
    });

    return { children, props: props as Props<P> };
  }

  // чтобы  работали events, переданные в компоненты . Мы создаем заглушку, которая будет потом заменяться элементом с событиями
  compile(template: string, props?: Record<string, any> | undefined) {
    if (typeof props === 'undefined') {
      props = this.props;
    }

    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id='${child.id}'></div>`;
    });

    const fragment = this._createDocumentElement('template');
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    Object.values(this.children).forEach((child) => {
      const stub = (fragment as HTMLTemplateElement).content.querySelector(
        `[data-id="${child.id}"]`
      );
      if (stub) {
        stub.replaceWith(child.getContent() as HTMLElement);
      }
    });
    return fragment.content;
  }
}

export default Block;
