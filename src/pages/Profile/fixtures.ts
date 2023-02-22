import Input from '../../components/Input/Input';

export const buttonsFixture = {
  changeData: {
    textContent: 'Изменить данные',
    attr: {
      class: 'user-page-form__button  button__clear',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
  },
  changePassword: {
    textContent: 'Изменить пароль',
    attr: {
      class: 'user-page-form__button  button__clear',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
  },
  signOut: {
    textContent: 'Выйти',
    attr: {
      class: 'user-page-form__button  button__red',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
  },
  save: {
    textContent: 'Сохранить',
    attr: {
      class: 'user-page-form__button  button__blue',
      type: 'submit',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
  },
};


export const inputsFixture = {
  email: {
    attr: {
      class: 'data__field__body',
      name: 'email',
      type: 'text',
      value: 'pochta@yandex.ru',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
  },
  login: {
    attr: {
      class: 'data__field__body',
      name: 'login',
      type: 'text',
      value: 'ivanivanov',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
  },
  firstName: {
    attr: {
      class: 'data__field__body',
      name: 'first_name',
      type: 'text',
      value: 'Иван',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
  },
  secondName: {
    attr: {
      class: 'data__field__body',
      name: 'second_name',
      type: 'text',
      value: 'Иванов',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
  },
  displayName: {
    attr: {
      class: 'data__field__body',
      name: 'display_name',
      type: 'text',
      value: 'Иван',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
  },
  phone: {
    attr: {
      class: 'data__field__body',
      name: 'phone',
      type: 'phone',
      value: '+7(909)9673030',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
  },
  oldPassword: {
    attr: {
      class: 'data__field__body',
      name: 'oldPassword',
      type: 'password',
      value: 'password',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
  },
  newPassword: {
    attr: {
      class: 'data__field__body',
      name: 'password',
      type: 'password',
      value: 'password',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
  },
  repeatNewPassword: {
    attr: {
      class: 'data__field__body',
      name: 'newPassword',
      type: 'password',
      value: 'password',
    },
    // events: {
    //   click: (e) => {
    //     console.log('click', e.target);
    //   },
    // },
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



/* SECURITY page*/
/* PROFILE and SETTINGS pages*/







// export const buttonsProfile = [
//   {
//     // button: "changeData",
//     // classes: "user-page-form__button  button__clear",
//     // value: "Изменить данные",
//   },
//   {
//     button: "changePassword",
//     classes: "user-page-form__button  button__clear",
//     value: "Изменить пароль",
//   },
//   {
//     button: "signOut",
//     classes: "user-page-form__button  button__red",
//     value: "Выйти",
//   },
// ];

// export const buttonsSaveProfile = [
//   {
//     button: "save",
//     classes: "user-page-form__button  button__blue",
//     value: "Сохранить",
//     type: "type='submit'",
//   },
// ];

// export const fieldsProfile = [
//   {
    // inputName: "email",
    // fieldClasses: "data__field",
    // fieldNameValue: "Почта",
    // inputClasses: "data__field__email",
    // userData: "pochta@yandex.ru",
    // type: "text,",
  // },
  // {
  //   inputName: "login",
  //   fieldClasses: "data__field",
  //   fieldNameValue: "Логин",
  //   inputClasses: "data__field__email",
  //   userData: "ivanivanov",
  //   type: "text,",
  // },
  // {
    // inputName: "first_name",
    // fieldClasses: "data__field",
    // fieldNameValue: "Имя",
    // inputClasses: "data__field__email",
    // userData: "Иван",
    // type: "text,",
  // },
  // {
    // inputName: "second_name",
    // fieldClasses: "data__field",
    // fieldNameValue: "Фамилия",
    // inputClasses: "data__field__email",
    // userData: "Иванов",
    // type: "text,",
  // },
  // {
  //   inputName: "display_name",
  //   fieldClasses: "data__field",
  //   fieldNameValue: "Имя в чате",
  //   inputClasses: "data__field__email",
  //   userData: "Иван",
  //   type: "text,",
  // },
//   {
//     inputName: "phone",
//     fieldClasses: "data__field",
//     fieldNameValue: "Телефон",
//     inputClasses: "data__field__email",
//     userData: "+7(909)-967-30-30",
//     type: "phone",
//   },
// ];

// export const fieldsPasswordProfile = [
//   {
//     inputName: "oldPassword",
//     fieldClasses: "data__field",
//     fieldNameValue: "Старый пароль",
//     inputClasses: "data__field__email",
//     userData: "password",
//     type: "password",
  // },
  // {
  //   inputName: "newPassword",
  //   fieldClasses: "data__field",
  //   fieldNameValue: "Новый пароль",
  //   inputClasses: "data__field__email",
  //   userData: "password",
  //   type: "password",
//   // },
//   {
//     inputName: "email",
//     fieldClasses: "data__field",
//     fieldNameValue: "Повторите новый пароль",
//     inputClasses: "data__field__email",
//     userData: "password",
//     type: "password",
//   },
// ];
