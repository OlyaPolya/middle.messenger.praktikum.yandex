import Error from './Error';

export const ServerError = new Error('div', {
  errorCode: '500',
  errorMessage: 'Мы уже фиксим',
  attr: {
    class: 'error-page',
  }
});

export const RequestError = new Error('div', {
  errorCode: '404',
  errorMessage: 'Не туда попали',
  attr: {
    class: 'error-page',
  },
});
