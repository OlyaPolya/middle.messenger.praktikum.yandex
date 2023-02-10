/* Методы on и off принимают название события, на которое необходимо подписаться, а также функцию-обработчик, которая будет вызвана, когда придёт оповещение о событии
emit - оповещение подписчиков о событии
Названия возможных событий лучше описывать в отдельном объекте или использовать enum в TypeScript.
*/

type Callback = () => void;

type Listeners = {
  [key: string]: Callback[];
};

class EventBus {
  listeners: Listeners = {};

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: () => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback: () => void) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  emit(event: string, ...args: string[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...(args as []));
    });
  }
}

export default EventBus;
