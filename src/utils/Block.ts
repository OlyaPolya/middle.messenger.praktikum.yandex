import { v4 as makeUUID } from 'uuid';
import EventBus from './EventBus';

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _element = null;
  _meta = null;
  props: any;
  _eventBus: EventBus;
  _id = null;
  _children = null;

  constructor(tagName = 'div', propsAndChilds = {}) {
    const { children, props } = this.getChildren(propsAndChilds);
    this._eventBus = new EventBus();

    this._meta = {
      tagName,
      props,
    };

    this._id = makeUUID();
    this._children = this._makePropsProxy(children);
    this.props = this._makePropsProxy({ ...props, __id: this._id });
    this._registerEvents();
    this._eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    this._eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    this._eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this._eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    this._eventBus.on(
      Block.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this)
    );
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount(oldProps) {}

  dispatchComponentDidMount() {
    this._eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  setProps = (nextProps) => {
    if (!nextProps) {
      return;
    }

    const { children, props} = this.getChildren(nextProps);

    if (Object.values(children).length) {
      Object.assign(this._children, children)
    }
    if (Object.values(props).length) {
      Object.assign(this._props, props);
    }
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    // Это небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно компилировать не в строку (или делать это правильно),
    // либо сразу превращать в DOM-элементы и возвращать из compile DOM-ноду
    this.removeEvents();
    this._element.innerHTML = '';
    this._element.innerHTML = block;
    this.addEvents();
    this.addAttribute();
  }

  render() {}

  getContent() {
    return this.element;
  }

  makePropsProxy(props) {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldValue = {...target};
        target[prop] = value;
        self.eventBus.emit(Block.EVENTS.FLOW_CDU, oldValue, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  createDocumentElement(tagName) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this._id);
    return element;
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }

  addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  removeEvents() {
    const { events = {} } = this._props;

    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  addAttribute() {
    const { attr = {} } = this._props;

    Object.keys(events).forEach(([key, value]) => {
      this._element.setAttribute(key, value);
    });
  }

  getChildren(propsandChilds) {
    const children = {};
    const props = {};
    Object.keys(propsandChilds).forEach((key) => {
      if (propsandChilds[key] instanceof Block) {
        children[key] = propsandChilds[key];
      } else {
        props[key] = propsandChilds[key];
      }
    });
  }
}

export default Block;
