import './styles.scss';

class Tooltip {
  name = 'tooltip';

  indent = 5;

  el: HTMLDivElement;

  listeners: { fn: (event: Event) => void; element: any; eventName: string }[];

  constructor() {
    this.el = document.createElement('div');
    this.el.style.position = 'absolute';
    this.el.classList.add(this.name);

    document.body.appendChild(this.el);

    this.listeners = [];
  }

  delegate(
    eventName: string,
    element: HTMLElement,
    cssSelector: string,
    callback: (event: Event) => void
  ) {
    const fn = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target) {
        if (!target.matches(cssSelector) || target.disabled) {
          return;
        }

        callback(event);
      }
    };

    element.addEventListener(eventName, fn);
    this.listeners.push({ fn, element, eventName });

    return this;
  }

  onShow = (event: Event) => {
    const sourceEl = event.target as HTMLElement;
    if (sourceEl) {
      this.el.innerHTML = sourceEl.getAttribute('data-tooltip') ?? '';

      this.el.classList.add(`${this.name}_active`);

      const sourceElRect = sourceEl.getBoundingClientRect();
      const elRect = this.el.getBoundingClientRect();

      let top = sourceElRect.bottom + this.indent;
      const { left } = sourceElRect;

      if (top + elRect.height > document.documentElement.clientHeight) {
        top = sourceElRect.top - elRect.height - this.indent;
      }

      this.el.style.top = `${top + window.scrollY}px`;
      this.el.style.left = `${left + window.scrollX}px`;
    }
  };

  onHide = () => {
    this.el.classList.remove(`${this.name}_active`);
    this.el.innerHTML = '';
  };

  attach(root: HTMLElement) {
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
