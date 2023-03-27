import Wrap from '../../../components/Input/Wrap';
import { labelFixture } from '../fixtures';
import Inputs from './Inputs';

const email = new Wrap('label', labelFixture.email);
const login = new Wrap('label', labelFixture.login);
const firstName = new Wrap('label', labelFixture.firstName);
const secondName = new Wrap('label', labelFixture.secondName);
const displayName = new Wrap('label', labelFixture.displayName);
const phone = new Wrap('label', labelFixture.phone);
const oldPassword = new Wrap('div', labelFixture.oldPassword);
const newPassword = new Wrap('div', labelFixture.newPassword);
const repeatPassword = new Wrap('div', labelFixture.repeatPassword);

export const SettingsInputs = new Inputs('div', {
  email,
  login,
  firstName,
  secondName,
  displayName,
  phone,
  attr: {
    class: 'user-page-form__data',
  },
});

export const PasswordInputs = new Inputs('div', {
  oldPassword,
  newPassword,
  repeatPassword,
  attr: {
    class: 'user-page-form__data',
  },
});
