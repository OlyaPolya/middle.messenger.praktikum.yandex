import { buttonI, inputI } from './types';

export const buttonFixture: buttonI[] = [
  {
    button: 'signup',
    classes: 'signup-form__submit button  button__blue',
    value: 'Зарегистрироваться',
  },
  {
    button: 'login',
    classes: 'signup-form__signup button  button__clear',
    value: 'Войти',
  },
];

export const inputFixture: inputI[] = [
  {
    inputName: 'email',
    labelClasses: 'label signup-form__label-input',
    labelValue: 'Почта',
    typeInput: 'email',
    inputClasses: 'input email-input signup-form__email-input',
  },
  {
    inputName: 'login',
    labelClasses: 'label signup-form__label-input',
    labelValue: 'Логин',
    typeInput: 'text',
    inputClasses: 'input login-input signup-form__login-input',
  },
  {
    inputName: 'first_name',
    labelClasses: 'label signup-form__label-input',
    labelValue: 'Имя',
    typeInput: 'text',
    inputClasses: 'input username-input signup-form__username-input',
  },
  {
    inputName: 'second_name',
    labelClasses: 'label signup-form__label-input',
    labelValue: 'Фамилия',
    typeInput: 'text',
    inputClasses: 'input usersurname-input signup-form__usersurname-input',
  },
  {
    inputName: 'phone',
    labelClasses: 'label signup-form__label-input',
    labelValue: 'Телефон',
    typeInput: 'tel',
    inputClasses: 'input phone-input signup-form__phone-input',
  },
  {
    inputName: 'password',
    labelClasses: 'label signup-form__label-input',
    labelValue: 'Пароль',
    typeInput: 'password',
    inputClasses: 'input password-input signup-form__password-input',
  },
  {
    inputName: 'password',
    labelClasses: 'label signup-form__label-input',
    labelValue: 'Пароль (еще раз)',
    typeInput: 'password',
    inputClasses: 'input password-input signup-form__password-input',
  },
];
