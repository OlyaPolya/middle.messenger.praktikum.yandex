import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';
import EventBus from './EventBus';

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _eventBus: EventBus;

  _element: HTMLElement | null = null;

  _meta: { tagName: string; props: any };

  _props: Record<string, any>;

  _id: string = '';

  _children: null | {} = null;

  constructor(tagName = 'div', propsAndChilds = {}) {
    const { children, props } = this.getChildren(propsAndChilds);
    this._eventBus = new EventBus();

    this._meta = {
      tagName,
      props,
    };

    this._id = makeUUID();
    this._children = this._makePropsProxy(children);
    this._props = this._makePropsProxy({ ...props, __id: this._id });
    this._registerEvents();
    this._eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents() {
    this._eventBus.on(Block.EVENTS.INIT, this.init.bind(this));

    this._eventBus.on(
      Block.EVENTS.FLOW_CDM,
      this._componentDidMount.bind(this)
    );
    this._eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    this._eventBus.on(
      Block.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this)
    );
  }

  /* создает обертку и вызывает первый рендер */
  init() {
    this._element = this._createDocumentElement(this._meta.tagName);

    this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this._id);
    return element;
  }

  _componentDidMount() {
    this.componentDidMount();
    Object.values(this._children).forEach((child) =>
      child.dispatchComponentDidMount()
    );
  }

  componentDidMount() {}

  /* вызываем ее снаружи после того, как добавили блок на страницу, чтобы опредлить появился блок на странице или нет */

  dispatchComponentDidMount() {
    this._eventBus.emit(Block.EVENTS.FLOW_CDM);
    if (Object.keys(this._children).length) {
      this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  private _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  /* изменить пропсы */
  setProps = (newProps) => {
    if (!newProps) {
      return;
    }

    const { children, props } = this.getChildren(newProps);

    if (Object.values(children).length) {
      Object.assign(this._children, children);
    }
    if (Object.values(props).length) {
      Object.assign(this._props, props);
    }
  };

  get elem() {
    return this._element;
  }

  private _render() {
    const block = this.render();
    this.removeEvents();
    this._element.innerHTML = '';
    this._element.append(block);
    this._addEvents();
    this.addAttribute();
  }

  /* в каждом компоненте  мы переопределяем этот метод и возвращаем строку через handlebars */
  render() {
    return '';
  }

  getContent() {
    return this._element;
  }

  private _makePropsProxy(props) {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldValue = { ...target };
        target[prop] = value;
        self._eventBus.emit(Block.EVENTS.FLOW_CDU, oldValue, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }

  _addEvents() {
    const { events = {} } = this._props;

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  removeEvents() {
    if (this._props?.events) {
      const { events = {} } = this._props;

      Object.keys(events).forEach((eventName) => {
        this._element.removeEventListener(eventName, events[eventName]);
      });
    }
  }

  addAttribute() {
    const { attr = {} } = this._props;

    Object.entries(attr).forEach(([key, value]) => {
      this._element.setAttribute(key, value);
    });
  }

  getChildren(propsAndChilds) {
    type Children = {
      [key: string]: string;
    };

    const children: Children = {};
    const props: Children = {};

    Object.keys(propsAndChilds).forEach((key) => {
      if (propsAndChilds[key] instanceof Block) {
        children[key] = propsAndChilds[key];
      } else {
        props[key] = propsAndChilds[key];
      }
    });

    return { children, props };
  }

  // чтобы  работали events, переданные в компоненты . Мы создаем заглушку, которая будет потом заменяться элементом с событиями
  compile(template: string, props?: Record<string, any> | undefined) {
    if (typeof props === 'undefined') {
      props = this._props;
    }

    const propsAndStubs = { ...props };

    Object.entries(this._children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id='${child._id}'></div>`;
    });

    const fragment = this._createDocumentElement('template');
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    Object.values(this._children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      if (stub) {
        stub.replaceWith(child.getContent());
      }
    });
    return fragment.content;
  }
}

export default Block;
