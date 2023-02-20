import './style.scss';
import Block from '../../utils/Block';

export const template = `
  <h1 class="error-page__title">{{{errorCode}}}</h1>
  <p class="error-page__description">{{{errorMessage}}}</p>
  <a class="error-page__back-link" href="#">Назад к чатам</a>
`;

class Error extends Block {
  render() {
    return this.compile(template);
  }
}

export default Error;
