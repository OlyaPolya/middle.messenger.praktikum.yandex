import './style.scss';
import { SettingsButtons, SaveButton } from './buttons/index';
import { SettingsInputs, PasswordInputs } from './inputs/index';
import Settings from './Settings';
import validateForm from '../../utils/validate/validateForm';

const SettingsPage = new Settings('div', {
  inputs: SettingsInputs,
  buttons: SettingsButtons,
  attr: {
    class: 'user-page',
  },
  events: {
    click: (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.target) {
        const element = e.target as HTMLElement;
        if (element.tagName === 'BUTTON') {
          handleClick(e.target as HTMLButtonElement);
        }
      }
    },
  },
});

export default SettingsPage;

function displaySettingsChangeForm() {
  SettingsPage.setProps({
    buttons: SaveButton,
  });
  const allInputs = document.querySelectorAll('.data__field__body');
  if (allInputs) {
    allInputs.forEach((input) => {
      input.removeAttribute('disabled');
    });
  }
}

function displaySettingsForm() {
  SettingsPage.setProps({
    inputs: SettingsInputs,
    buttons: SettingsButtons,
  });
  const allInputs = document.querySelectorAll('.data__field__body');
  if (allInputs) {
    allInputs.forEach((input) => {
      input.setAttribute('disabled', 'disabled');
    });
  }
}

function displayPasswordChangeForm() {
  SettingsPage.setProps({
    inputs: PasswordInputs,
    buttons: SaveButton,
  });
}

function handleClick(button: HTMLButtonElement) {
  if (button.classList.contains('button__changeData')) {
    displaySettingsChangeForm();
  }
  if (button.classList.contains('button__save')) {
    if (validateForm()) {
      displaySettingsForm();
    }
  }
  if (button.classList.contains('button__changePassword')) {
    displayPasswordChangeForm();
  }
}
