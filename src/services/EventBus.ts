/* Методы on и off принимают название события, на которое необходимо подписаться, а также функцию-обработчик, которая будет вызвана, когда придёт оповещение о событии
emit - оповещение подписчиков о событии
Названия возможных событий лучше описывать в отдельном объекте или использовать enum в TypeScript.
*/

type Callback = (...args: any[]) => void;

class EventBus {
  listeners: Record<string, Array<Callback>> = {};

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: Callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback: Callback) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  emit(event: string, ...args: any[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}

export default EventBus;
