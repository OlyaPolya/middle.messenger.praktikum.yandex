import { IButton, IInput } from '../SignInPage/types';
import Input from '../../components/Input/Input';

export const buttonFixture = {
  signup: {
    textContent: 'Зарегистрироваться',
    attr: {
      class: 'signup-form__submit button  button__blue',
      type: 'submit',
    },
    events: {
      click: (e) => {
        console.log('click', e.target);
      },
    },
  },
  login: {
    textContent: 'Войти',
    attr: {
      class: 'signup-form__signup button  button__clear',
    },
    events: {
      click: (e) => {
        console.log('click', e.target);
      },
    },
  },
};

const inputsFixture = {
  email: {
    attr: {
      class: 'form-input input email-input signup-form__email-input',
      name: 'email',
      type: 'email',
      value: 'pochta@yandex.ru',
    },
    events: {
      click: (e) => {
        console.log('click', e.target);
      },
    },
  },
  login: {
    attr: {
      class: 'form-input input login-input signup-form__login-input',
      name: 'login',
      type: 'text',
      value: 'ivanivanov',
    },
    events: {
      click: (e) => {
        console.log('click', e.target);
      },
    },
  },
  firstName: {
    attr: {
      class: 'form-input input username-input signup-form__username-input',
      name: 'first_name',
      type: 'text',
      value: 'Иван',
    },
    events: {
      click: (e) => {
        console.log('click', e.target);
      },
    },
  },
  secondName: {
    attr: {
      class:
        'form-input input usersurname-input signup-form__usersurname-input',
      name: 'second_name',
      type: 'text',
      value: 'Иванов',
    },
    events: {
      click: (e) => {
        console.log('click', e.target);
      },
    },
  },
  phone: {
    attr: {
      class: 'form-input input phone-input signup-form__phone-input',
      name: 'phone',
      type: 'tel',
      value: '+7(909)9673030',
    },
    events: {
      click: (e) => {
        console.log('click', e.target);
      },
    },
  },

  password: {
    attr: {
      class: 'form-input input password-input signup-form__password-input',
      name: 'password',
      type: 'password',
      value: 'ivanivanov',
    },
    events: {
      click: (e) => {
        console.log('click', e.target);
      },
    },
  },
  repeatPassword: {
    attr: {
      class: 'form-input input password-input signup-form__password-input',
      name: 'password',
      type: 'password',
      value: 'ivanivanov',
    },
    events: {
      click: (e) => {
        console.log('click', e.target);
      },
    },
  },
};

export const labelFixture = {
  repeatPassword: {
    spanClass: 'label-input__subtitle',
    value: 'Пароль (еще раз)',
    input: new Input('input', inputsFixture.repeatPassword),
    attr: {
      class: 'label signup-form__label-input label_red',
    },
  },
  password: {
    spanClass: 'label-input__subtitle',
    value: 'Пароль',
    input: new Input('input', inputsFixture.password),
    attr: {
      class: 'label signup-form__label-input',
    },
  },

  phone: {
    spanClass: 'label-input__subtitle',
    value: 'Телефон',
    input: new Input('input', inputsFixture.phone),
    attr: {
      class: 'label signup-form__label-input',
    },
  },

  secondName: {
    spanClass: 'label-input__subtitle',
    value: 'Фамилия',
    input: new Input('input', inputsFixture.secondName),
    attr: {
      class: 'label signup-form__label-input',
    },
  },

  firstName: {
    spanClass: 'label-input__subtitle',
    value: 'Имя',
    input: new Input('input', inputsFixture.firstName),
    attr: {
      class: 'label signup-form__label-input',
    },
  },

  email: {
    spanClass: 'label-input__subtitle',
    value: 'Почта',
    input: new Input('input', inputsFixture.email),
    attr: {
      class: 'label signup-form__label-input',
    },
  },
  login: {
    spanClass: 'label-input__subtitle',
    value: 'Логин',
    input: new Input('input', inputsFixture.login),
    attr: {
      class: 'label signup-form__label-input',
    },
  },
};

// export const inputFixture = {
// {
//   // inputName: 'email',
//   // labelClasses: 'label signup-form__label-input',
//   // labelValue: 'Почта',
//   // typeInput: 'email',
//   // inputClasses: 'input email-input signup-form__email-input',
//   inputValue: 'pochta@yandex.ru',
// },

// {
//   // inputName: 'login',
//   // labelClasses: 'label signup-form__label-input',
//   labelValue: 'Логин',
//   typeInput: 'text',
//   inputClasses: 'input login-input signup-form__login-input',
//   inputValue: 'ivanivanov',
// },
// {
//   inputName: 'first_name',
//   labelClasses: 'label signup-form__label-input',
//   labelValue: 'Имя',
//   typeInput: 'text',
//   inputClasses: 'input username-input signup-form__username-input',
//   inputValue: 'Иван',
// },
// {
// inputName: 'second_name',
// labelClasses: 'label signup-form__label-input',
// labelValue: 'Фамилия',
// typeInput: 'text',
// inputClasses: 'input usersurname-input signup-form__usersurname-input',
// inputValue: 'Иванов',
// },
// {
//   inputName: 'phone',
//   labelClasses: 'label signup-form__label-input',
//   labelValue: 'Телефон',
//   typeInput: 'tel',
//   inputClasses: 'input phone-input signup-form__phone-input',
//   inputValue: '+7 (909) 967 30 30',
// },
//   {
//     inputName: 'password',
//     labelClasses: 'label signup-form__label-input',
//     labelValue: 'Пароль',
//     typeInput: 'password',
//     inputClasses: 'input password-input signup-form__password-input',
//     inputValue: 'ivanivanov',
//   },
//   {
//     inputName: 'password',
//     labelClasses: 'label signup-form__label-input label_red',
//     labelValue: 'Пароль (еще раз)',
//     typeInput: 'password',
//     inputClasses: 'input password-input signup-form__password-input',
//     inputValue: 'ivanivanov',
//   },
// };
