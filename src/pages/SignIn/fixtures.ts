import { Button, Input as InputType } from './types';
import Input from '../../components/Input/Input';

export const buttonsFixture: Button = {
  signIn: {
    textContent: 'Войти',
    attr: {
      class: 'signin-form__submit button  button__blue',
      type: 'submit',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
  },
  signUp: {
    textContent: 'Нет аккаунта?',
    attr: {
      class: 'signin-form__signup button  button__clear',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
  },
};

export const inputsFixture = {
  login: {
    attr: {
      class: 'form-input login-input signin-form__username-input',
      name: 'login',
      type: 'text',
      value: 'Ivanivanov',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
  },
  password: {
    attr: {
      class: 'form-input password-input signin-form__password-input',
      name: 'password',
      type: 'password',
      value: 'ivanivanov',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
  },
};

export const labelFixture = {
  login: {
    spanClass: 'label-input__subtitle',
    value: 'Логин',
    input: new Input('input', inputsFixture.login),
    attr: {
      class: 'label signin-form__label-input',
    },
  },
  password: {
    spanClass: 'label-input__subtitle',
    value: 'Пароль',
    input: new Input('input', inputsFixture.password),
    attr: {
      class: 'label signin-form__label-input',
    },
  },
};
