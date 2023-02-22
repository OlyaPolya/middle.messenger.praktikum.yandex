import {
  regexpName,
  regexpLogin,
  regexpEmail,
  regexpPassword,
  regexpPhone,
  regexpMessage,
} from './regexPatterns';

function showError(
  item: HTMLElement,
  message: string = 'Поле не верно заполнено'
) {
  item.classList.add('error');
  const errorField = item.parentElement?.querySelector('.tooltip-error');
  if (errorField) {
    errorField.textContent = message;
    errorField.classList.add('tooltip-error__show');
  }
}

function hideError(item: HTMLElement) {
  item.classList.remove('error');
  const errorField = item.parentElement?.querySelector('.tooltip-error');
  errorField?.classList.remove('tooltip-error__show');
}

function isMatchPassword(item: HTMLInputElement): boolean {
  const originPassword = document.querySelector('input[name="password"]') as HTMLInputElement;
  console.log('НАСТОЯЩИЙ ПАРОЛЬ', originPassword);
  if (originPassword) {
    return originPassword.value === item.value;
  }
  return false;
}

function isValidField(item: HTMLInputElement): boolean {
  console.log(item.value);
  switch (item.name) {
    case 'first_name':
    case 'second_name': {
      if (!regexpName.test(item.value)) {
        showError(item);
        return false;
      }
      hideError(item);
      return true;

      break;
    }
    case 'password': {
      if (!regexpPassword.test(item.value)) {
        showError(item);
        return false;
      }
      hideError(item);
      return true;

      break;
    }
    case 'email': {
      if (!regexpEmail.test(item.value)) {
        showError(item);
        return false;
      }
      hideError(item);
      return true;

      break;
    }
    case 'login': {
      if (!regexpLogin.test(item.value)) {
        showError(item);
        return false;
      }
      hideError(item);
      return true;

      break;
    }
    case 'phone': {
      if (!regexpPhone.test(item.value)) {
        showError(item);
        return false;
      }
      hideError(item);
      return true;

      break;
    }
    case 'regexpMessage': {
      if (!regexpMessage.test(item.value)) {
        showError(item);
        return false;
      }
      hideError(item);
      return true;

      break;
    }
    case 'repeatPassword': {
      if (!isMatchPassword(item)) {
        showError(item, 'Пароли не совпадают');
        return false;
      }
      hideError(item);
      return true;

      break;
    }
    default:
      console.log('Неизвестное значение');
      return false;
  }
}

export default isValidField;
