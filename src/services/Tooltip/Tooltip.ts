import './styles.scss';

class Tooltip {
  name = 'tooltip';

  indent = 5;

  el: HTMLDivElement;

  listeners;

  constructor() {
    this.el = document.createElement('div');
    this.el.style.position = 'absolute';
    this.el.classList.add(this.name);

    document.body.appendChild(this.el);

    this.listeners = [];
  }

  delegate(eventName, element, cssSelector, callback) {
    const fn = (event) => {
      if (!event.target.matches(cssSelector) || event.target.disabled) {
        return;
      }

      callback(event);
    };

    element.addEventListener(eventName, fn);
    this.listeners.push({ fn, element, eventName });

    return this;
  }

  onShow = (event) => {
    // Элемент, на который пользователь навёл мышкой
    const sourceEl = event.target;

    // HTML тултипа задаём из data-аттрибута
    this.el.innerHTML = sourceEl.getAttribute('data-tooltip');

    // Добавляем класс _active, чтобы отобразить тултип
    this.el.classList.add(`${this.name}_active`);

    const sourceElRect = sourceEl.getBoundingClientRect();
    const elRect = this.el.getBoundingClientRect();

    let top = sourceElRect.bottom + this.indent;
    const left = sourceElRect.left;

    // Если тултип не влезает по высоте, то поднимаем его над элементом
    if (top + elRect.height > document.documentElement.clientHeight) {
      top = sourceElRect.top - elRect.height - this.indent;
    }

    this.el.style.top = `${top + window.scrollY}px`;
    this.el.style.left = `${left + window.scrollX}px`;
  };

  onHide = () => {
    this.el.classList.remove(`${this.name}_active`);
    this.el.innerHTML = '';
  };

  attach(root) {
    this.delegate('mouseover', root, '[data-tooltip]', this.onShow).delegate(
      'mouseout',
      root,
      '[data-tooltip]',
      this.onHide
    );
  }

  detach() {
    for (const { fn, element, eventName } of this.listeners) {
      element.removeEventListener(eventName, fn);
    }

    this.listeners = [];
  }
}

export default Tooltip;
