import { IButton, IInput } from './types';

export const buttonFixture: IButton[] = [
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

export const inputFixture: IInput[] = [
  {
    inputName: 'login',
    labelClasses: 'label signin-form__label-input',
    labelValue: 'Логин',
    typeInput: 'text',
    inputClasses: 'login-input signin-form__username-input',
    inputValue: 'ivanivanov',
  },
  {
    inputName: 'password',
    labelClasses: 'label signin-form__label-input',
    labelValue: 'Пароль',
    typeInput: 'password',
    inputClasses: 'password-input signin-form__password-input',
    inputValue: 'ivanivanov',
  },
];
