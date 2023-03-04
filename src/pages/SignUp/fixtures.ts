import Input from '../../components/Input/Input';
import isValidField from '../../utils/validate/isValidField';

export const buttonFixture = {
  signup: {
    textContent: 'Зарегистрироваться',
    attr: {
      class: 'signup-form__submit button  button__blue',
      type: 'submit',
    },
  },
  login: {
    textContent: 'Войти',
    attr: {
      class: 'signup-form__signup button  button__clear',
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
      'data-tooltip':
        `Латиница, может включать цифры и спецсимволы вроде дефиса,
         обязательно должна быть «собака» (@)`,
    },
  },
  login: {
    attr: {
      class: 'form-input input login-input signup-form__login-input',
      name: 'login',
      type: 'text',
      value: 'ivanivanov',
      'data-tooltip':
        `От 3 до 20 символов, латиница, может содержать цифры,
        но не состоять из них, без пробелов, без спецсимволов
        (допустимы дефис и нижнее подчёркивание)`,
    },
  },
  firstName: {
    attr: {
      class: 'form-input input username-input signup-form__username-input',
      name: 'first_name',
      type: 'text',
      value: 'Иван',
      'data-tooltip':
        `Латиница или кириллица, первая буква должна быть заглавной,
        без пробелов и без цифр, нет спецсимволов (допустим только дефис)`,
    },
  },
  secondName: {
    attr: {
      class:
        'form-input input usersurname-input signup-form__usersurname-input',
      name: 'second_name',
      type: 'text',
      value: 'Иванов',
      'data-tooltip':
        `Латиница или кириллица, первая буква должна быть заглавной,
         без пробелов и без цифр, нет спецсимволов (допустим только дефис)`,
    },
  },
  phone: {
    attr: {
      class: 'form-input input phone-input signup-form__phone-input',
      name: 'phone',
      type: 'tel',
      value: '+79099673030',
      'data-tooltip':
        'От 10 до 15 символов, состоит из цифр, может начинается с плюса',
    },
  },

  password: {
    attr: {
      class: 'form-input input password-input signup-form__password-input',
      name: 'password',
      type: 'password',
      value: 'I1vanivanov',
      'data-tooltip':
        'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
    },
  },
  repeatPassword: {
    attr: {
      class: 'form-input input password-input signup-form__password-input',
      name: 'repeatPassword',
      type: 'password',
      value: 'I1vanivanov',
      'data-tooltip': 'Повторите пароль',
    },
  },
};

export const labelFixture = {
  repeatPassword: {
    spanClass: 'label-input__subtitle',
    value: 'Пароль (еще раз)',
    input: new Input('input', {
      ...inputsFixture.repeatPassword,
      events: {
        focus: (e: Event) => {
          isValidField(e.target as HTMLInputElement);
        },
        blur: (e: Event) => {
          isValidField(e.target as HTMLInputElement);
        },
      },
    }),
    attr: {
      class: 'label signup-form__label-input label_red',
    },
  },
  password: {
    spanClass: 'label-input__subtitle',
    value: 'Пароль',
    input: new Input('input', {
      ...inputsFixture.password,
      events: {
        focus: (e: Event) => {
          isValidField(e.target as HTMLInputElement);
        },
        blur: (e: Event) => {
          isValidField(e.target as HTMLInputElement);
        },
      },
    }),
    attr: {
      class: 'label signup-form__label-input',
    },
  },

  phone: {
    spanClass: 'label-input__subtitle',
    value: 'Телефон',
    input: new Input('input', {
      ...inputsFixture.phone,
      events: {
        focus: (e: Event) => {
          isValidField(e.target as HTMLInputElement);
        },
        blur: (e: Event) => {
          isValidField(e.target as HTMLInputElement);
        },
      },
    }),
    attr: {
      class: 'label signup-form__label-input',
    },
  },

  secondName: {
    spanClass: 'label-input__subtitle',
    value: 'Фамилия',
    input: new Input('input', {
      ...inputsFixture.secondName,
      events: {
        focus: (e: Event) => {
          isValidField(e.target as HTMLInputElement);
        },
        blur: (e: Event) => {
          isValidField(e.target as HTMLInputElement);
        },
      },
    }),
    attr: {
      class: 'label signup-form__label-input',
    },
  },

  firstName: {
    spanClass: 'label-input__subtitle',
    value: 'Имя',
    input: new Input('input', {
      ...inputsFixture.firstName,
      events: {
        focus: (e: Event) => {
          isValidField(e.target as HTMLInputElement);
        },
        blur: (e: Event) => {
          isValidField(e.target as HTMLInputElement);
        },
      },
    }),
    attr: {
      class: 'label signup-form__label-input',
    },
  },

  email: {
    spanClass: 'label-input__subtitle',
    value: 'Почта',
    input: new Input('input', {
      ...inputsFixture.email,
      events: {
        focus: (e: Event) => {
          isValidField(e.target as HTMLInputElement);
        },
        blur: (e: Event) => {
          isValidField(e.target as HTMLInputElement);
        },
      },
    }),
    attr: {
      class: 'label signup-form__label-input',
    },
  },
  login: {
    spanClass: 'label-input__subtitle',
    value: 'Логин',
    input: new Input('input', {
      ...inputsFixture.login,
      events: {
        focus: (e: Event) => {
          isValidField(e.target as HTMLInputElement);
        },
        blur: (e: Event) => {
          isValidField(e.target as HTMLInputElement);
        },
      },
    }),
    attr: {
      class: 'label signup-form__label-input',
    },
  },
};
