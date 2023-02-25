import Input from '../../components/Input/Input';

export const buttonsFixture = {
  changeData: {
    textContent: 'Изменить данные',
    attr: {
      class: 'user-page-form__button  button__clear button__changeData',
    },

  },
  changePassword: {
    textContent: 'Изменить пароль',
    attr: {
      class: 'user-page-form__button  button__clear button__changePassword',
    },

  },
  signOut: {
    textContent: 'Выйти',
    attr: {
      class: 'user-page-form__button  button__red button__signOut',
    },

  },
  save: {
    textContent: 'Сохранить',
    attr: {
      class: 'user-page-form__button  button__blue button__save',
      type: 'submit',
    },

  },
};

export const inputsFixture = {
  email: {
    attr: {
      class: 'data__field__body',
      name: 'email',
      type: 'text',
      value: 'pochta@yandex.ru',
      disabled: 'disabled',
    },
  },
  login: {
    attr: {
      class: 'data__field__body',
      name: 'login',
      type: 'text',
      value: 'ivanivanov',
      disabled: 'disabled',
    },
  },
  firstName: {
    attr: {
      class: 'data__field__body',
      name: 'first_name',
      type: 'text',
      value: 'Иван',
      disabled: 'disabled',
    },
  },
  secondName: {
    attr: {
      class: 'data__field__body',
      name: 'second_name',
      type: 'text',
      value: 'Иванов',
      disabled: 'disabled',
    },
  },
  displayName: {
    attr: {
      class: 'data__field__body',
      name: 'display_name',
      type: 'text',
      value: 'Иван',
      disabled: 'disabled',
    },
  },
  phone: {
    attr: {
      class: 'data__field__body',
      name: 'phone',
      type: 'phone',
      value: '+7(909)9673030',
      disabled: 'disabled',
    },
  },
  oldPassword: {
    attr: {
      id: 'oldPassword',
      class: 'data__field__body',
      name: 'oldPassword',
      type: 'password',
      value: 'P1assword',
    },
  },
  newPassword: {
    attr: {
      id: 'newPassword',
      class: 'data__field__body',
      name: 'password',
      type: 'password',
      value: 'P1assword',
    },
  },
  repeatNewPassword: {
    attr: {
      class: 'data__field__body',
      name: 'repeatNewPassword',
      type: 'password',
      value: 'P1assword',
    },
  },
};

export const labelFixture = {
  phone: {
    spanClass: 'data__field-title',
    value: 'Телефон',
    input: new Input('input', inputsFixture.phone),
    attr: {
      class: 'data__field',
    },
  },
  displayName: {
    spanClass: 'data__field-title',
    value: 'Имя в чате',
    input: new Input('input', inputsFixture.displayName),
    attr: {
      class: 'data__field',
    },
  },
  secondName: {
    spanClass: 'data__field-title',
    value: 'Фамилия',
    input: new Input('input', inputsFixture.secondName),
    attr: {
      class: 'data__field',
    },
  },
  firstName: {
    spanClass: 'data__field-title',
    value: 'Имя',
    input: new Input('input', inputsFixture.firstName),
    attr: {
      class: 'data__field',
    },
  },
  email: {
    spanClass: 'data__field-title',
    value: 'Почта',
    input: new Input('input', inputsFixture.email),
    attr: {
      class: 'data__field',
    },
  },
  login: {
    spanClass: 'data__field-title',
    value: 'Логин',
    input: new Input('input', inputsFixture.login),
    attr: {
      class: 'data__field',
    },
  },
  repeatNewPassword: {
    spanClass: 'data__field-title',
    value: 'Повторите новый пароль',
    input: new Input('input', inputsFixture.repeatNewPassword),
    attr: {
      class: 'data__field',
    },
  },
  newPassword: {
    spanClass: 'data__field-title',
    value: 'Новый пароль',
    input: new Input('input', inputsFixture.newPassword),
    attr: {
      class: 'data__field',
    },
  },
  oldPassword: {
    spanClass: 'data__field-title',
    value: 'Старый пароль',
    input: new Input('input', inputsFixture.oldPassword),
    attr: {
      class: 'data__field',
    },
  },
};
