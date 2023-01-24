import { buttonI, inputI } from './types';

export const buttonFixture: buttonI[] = [
  {
    button: 'signin',
    classes: 'signin-form__submit button  button__blue',
    value: 'Войти',
  },
  {
    button: 'signUp',
    classes: 'signin-form__signup button  button__clear',
    value: 'Нет аккаунта?',
  },
];

export const inputFixture: inputI[] = [
  {
    inputName: 'login',
    labelClasses: 'label signin-form__label-input',
    labelValue: 'Логин',
    typeInput: 'text',
    inputClasses: 'input login-input signin-form__username-input',
  },
  {
    inputName: 'password',
    labelClasses: 'label signin-form__label-input',
    labelValue: 'Пароль',
    typeInput: 'password',
    inputClasses: 'input password-input signin-form__password-input',
  },
];
