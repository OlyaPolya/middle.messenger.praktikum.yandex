/* eslint-disable @typescript-eslint/no-use-before-define */
import './style.scss';
import { ProfileButtons, SaveButton } from './buttons/index';
import { ProfileInputs, PasswordInputs } from './inputs/index';
import Profile from './Profile';
import isValidField from '../../utils/validate/isValidField';
import validateForm from '../../utils/validate/validateForm';

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

const ProfilePage = new Profile('div', {
  inputs: ProfileInputs,
  buttons: ProfileButtons,
  attr: {
    class: 'user-page',
  },
  events: {
    focus: (e: Event) => {
      isValidField(e.target as HTMLInputElement);
    },
    blur: (e: Event) => {
      isValidField(e.target as HTMLInputElement);
    },
    click: (e: HTMLElementEvent<HTMLButtonElement>) => {
      if (e.target) {
        handleClick(e.target);
      }
      e.preventDefault();
      e.stopPropagation();
    },
  },
});

export default ProfilePage;

function displayProfileChangeForm() {
  ProfilePage.setProps({
    buttons: SaveButton,
  });
  const allInputs = document.querySelectorAll('.data__field__body');
  if (allInputs) {
    allInputs.forEach((input) => {
      input.removeAttribute('disabled');
    });
  }
}

function displayProfileForm() {
  ProfilePage.setProps({
    inputs: ProfileInputs,
    buttons: ProfileButtons,
  });
  const allInputs = document.querySelectorAll('.data__field__body');
  if (allInputs) {
    allInputs.forEach((input) => {
      input.setAttribute('disabled', 'disabled');
    });
  }
}

function displayPasswordChangeForm() {
  ProfilePage.setProps({
    inputs: PasswordInputs,
    buttons: SaveButton,
  });
}

function handleClick(button: HTMLButtonElement) {
  if (button.classList.contains('button__changeData')) {
    displayProfileChangeForm();
  }
  if (button.classList.contains('button__save')) {
    if (validateForm()) {
      displayProfileForm();
    }
  }
  if (button.classList.contains('button__changePassword')) {
    displayPasswordChangeForm();
  }
}
