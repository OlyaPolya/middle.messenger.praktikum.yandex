import HTTPTransport from '../services/HTTPTransport';

class BaseAPI {
  // На случай, если забудете переопределить метод и используете его, — выстрелит ошибка
  protected http: HTTPTransport;

  constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint);
  }

  create() {
    throw new Error('Not implemented');
  }

  request() {
    throw new Error('Not implemented');
  }

  update() {
    throw new Error('Not implemented');
  }

  delete() {
    throw new Error('Not implemented');
  }
}

export default BaseAPI;
