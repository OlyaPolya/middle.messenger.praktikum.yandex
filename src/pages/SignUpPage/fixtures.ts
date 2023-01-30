import { IButton, IInput } from '../SignInPage/types';

export const buttonFixture: IButton[] = [
  {
    button: 'signup',
    classes: 'signup-form__submit button  button__blue',
    value: 'Зарегистрироваться',
    type: 'type="submit"',
  },
  {
    button: 'login',
    classes: 'signup-form__signup button  button__clear',
    value: 'Войти',
  },
];

export const inputFixture: IInput[] = [
  {
    inputName: 'email',
    labelClasses: 'label signup-form__label-input',
    labelValue: 'Почта',
    typeInput: 'email',
    inputClasses: 'input email-input signup-form__email-input',
    inputValue: 'pochta@yandex.ru',
  },
  {
    inputName: 'login',
    labelClasses: 'label signup-form__label-input',
    labelValue: 'Логин',
    typeInput: 'text',
    inputClasses: 'input login-input signup-form__login-input',
    inputValue: 'ivanivanov',
  },
  {
    inputName: 'first_name',
    labelClasses: 'label signup-form__label-input',
    labelValue: 'Имя',
    typeInput: 'text',
    inputClasses: 'input username-input signup-form__username-input',
    inputValue: 'Иван',
  },
  {
    inputName: 'second_name',
    labelClasses: 'label signup-form__label-input',
    labelValue: 'Фамилия',
    typeInput: 'text',
    inputClasses: 'input usersurname-input signup-form__usersurname-input',
    inputValue: 'Иванов',
  },
  {
    inputName: 'phone',
    labelClasses: 'label signup-form__label-input',
    labelValue: 'Телефон',
    typeInput: 'tel',
    inputClasses: 'input phone-input signup-form__phone-input',
    inputValue: '+7 (909) 967 30 30',
  },
  {
    inputName: 'password',
    labelClasses: 'label signup-form__label-input',
    labelValue: 'Пароль',
    typeInput: 'password',
    inputClasses: 'input password-input signup-form__password-input',
    inputValue: 'ivanivanov',
  },
  {
    inputName: 'password',
    labelClasses: 'label signup-form__label-input label_red',
    labelValue: 'Пароль (еще раз)',
    typeInput: 'password',
    inputClasses: 'input password-input signup-form__password-input',
    inputValue: 'ivanivanov',
  },
];
