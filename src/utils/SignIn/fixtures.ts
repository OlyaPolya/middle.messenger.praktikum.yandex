import { buttonI, inputI } from './types';

export const buttonFixture: buttonI[] = [
  {
    button: 'signIn',
    classes: 'signIn-form__submit button  button__blue',
    value: 'Авторизоваться',
  },
  {
    button: 'signUp',
    classes: 'signIn-form__signup button  button__clear',
    value: 'Нет аккаунта?',
  },
];

export const inputFixture: inputI[] = [
  {
    inputName: 'login',
    labelClasses: 'label signIn-form__label-input',
    labelValue: 'Логин',
    typeInput: 'text',
    inputClasses: 'text-input signIn-form__username-input',
  },
  {
    inputName: 'password',
    labelClasses: 'label signIn-form__label-input',
    labelValue: 'Пароль',
    typeInput: 'password',
    inputClasses: 'password-input signIn-form__password-input',
  },
];
