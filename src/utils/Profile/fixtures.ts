export const buttonsProfile = [
  {
    button: 'changeData',
    classes: 'user-page-form button  button__clear',
    value: 'Изменить данные',
  },
  {
    button: 'changePassword',
    classes: 'user-page-form button  button__clear',
    value: 'Изменить пароль',
  },
  {
    button: 'signOut',
    classes: 'user-page-form button  button__red',
    value: 'Выйти',
  },
];

export const buttonsSaveProfile = [
  {
    button: 'save',
    classes: 'user-page-form button  button__blue',
    value: 'Сохранить',
  },
];

export const fieldsProfile = [
  {
    inputName: 'email',
    fieldClasses: 'user-page-form__field-title',
    fieldNameValue: 'Почта',
    inputClasses: 'user-page-form__field field__email',
    userData: 'pochta@yandex.ru',
    type: 'text,',
  },
  {
    inputName: 'login',
    fieldClasses: 'user-page-form__field-title',
    fieldNameValue: 'Логин',
    inputClasses: 'user-page-form__field field__login',
    userData: 'ivanivanov',
    type: 'text,',
  },
  {
    inputName: 'first_name',
    fieldClasses: 'user-page-form__field-title',
    fieldNameValue: 'Имя',
    inputClasses: 'user-page-form__field field__first_name',
    userData: 'Иван',
    type: 'text,',
  },
  {
    inputName: 'second_name',
    fieldClasses: 'user-page-form__field-title',
    fieldNameValue: 'Фамилия',
    inputClasses: 'user-page-form__field field__second_name',
    userData: 'Иванов',
    type: 'text,',
  },
  {
    inputName: 'display_name',
    fieldClasses: 'user-page-form__field-title',
    fieldNameValue: 'Имя в чате',
    inputClasses: 'user-page-form__field field__display_name',
    userData: 'Иван',
    type: 'text,',
  },
  {
    inputName: 'phone',
    fieldClasses: 'user-page-form__field-title',
    fieldNameValue: 'Телефон',
    inputClasses: 'user-page-form__field field__display_phone',
    userData: '+7(909)9673030',
    type: 'text,',
  },
];

export const fieldsPasswordProfile = [
  {
    inputName: 'email',
    fieldClasses: 'user-page-form__field-title',
    fieldNameValue: 'Старый пароль',
    inputClasses: 'user-page-form__field field__email',
    userData: 'password',
    type: 'password',
  },
  {
    inputName: 'email',
    fieldClasses: 'user-page-form__field-title',
    fieldNameValue: 'Новый пароль',
    inputClasses: 'user-page-form__field field__email',
    userData: 'password',
    type: 'password',
  },
  {
    inputName: 'email',
    fieldClasses: 'user-page-form__field-title',
    fieldNameValue: 'Повторите новый пароль',
    inputClasses: 'user-page-form__field field__email',
    userData: 'password',
    type: 'password',
  },
];