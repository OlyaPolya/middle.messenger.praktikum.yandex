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
  const originPassword = document.querySelector('#newPassword') as HTMLInputElement;
  if (originPassword) {
    return originPassword.value === item.value;
  }
  return false;
}

function isPassRegexp(regexpRule: RegExp, field: HTMLInputElement) {
  if (!regexpRule.test(field.value)) {
    showError(field);
    return false;
  }
  hideError(field);
  return true;
}

function isValidField(item: HTMLInputElement): boolean {
  switch (item.name) {
    case 'first_name':
    case 'second_name': {
      return isPassRegexp(regexpName, item);
      break;
    }
    case 'password': {
      return isPassRegexp(regexpPassword, item);
      break;
    }
    case 'email': {
      return isPassRegexp(regexpEmail, item);
      break;
    }
    case 'login': {
      return isPassRegexp(regexpLogin, item);
      break;
    }
    case 'phone': {
      return isPassRegexp(regexpPhone, item);
      break;
    }
    case 'message': {
      return isPassRegexp(regexpMessage, item);
      break;
    }
    case 'oldPassword': {
      return isPassRegexp(regexpPassword, item);
      break;
    }
    case 'repeatNewPassword': {
      const newPassword = document.querySelector('#newPassword');

      if (newPassword) {
        if (
          !isMatchPassword(item)
          || newPassword.innerHTML !== item.innerHTML
        ) {
          showError(item, 'Пароли не совпадают');
          return false;
        }
        hideError(item);
        return true;
      }
      return true;
      break;
    }
    case 'display_name': {
      return isPassRegexp(regexpMessage, item);
      break;
    }
    default:
      return false;
  }
}

export default isValidField;
