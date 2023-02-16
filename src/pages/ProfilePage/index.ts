import Label from '../../components/Input/Label';
import { buttonsFixture, labelFixture } from './fixtures';
import './style.scss';
import Button from '../../components/Button/Button';
import Profile from './Profile';

const email = new Label('div', labelFixture.email);
const login = new Label('div', labelFixture.login);
const firstName = new Label('div', labelFixture.firstName);
const secondName = new Label('div', labelFixture.secondName);
const displayName = new Label('div', labelFixture.displayName);
const phone = new Label('div', labelFixture.phone);
const oldPassword = new Label('div', labelFixture.oldPassword);
const newPassword = new Label('div', labelFixture.newPassword);
const repeatNewPassword = new Label('div', labelFixture.repeatNewPassword);
const changeData = new Button('button', buttonsFixture.changeData);
const changePassword = new Button('button', buttonsFixture.changePassword);
const signOut = new Button('button', buttonsFixture.signOut);
const save = new Button('button', buttonsFixture.save);

export const ProfilePage = new Profile('div', {
  email,
  login,
  firstName,
  secondName,
  displayName,
  phone,
  changeData,
  changePassword,
  signOut,
  attr: {
    class: 'user-page',
  },
});

export const SettingsPage = new Profile('div', {
  email,
  login,
  firstName,
  secondName,
  displayName,
  phone,
  save,
  attr: {
    class: 'user-page',
  },
});

export const SecurityPage = new Profile('div', {
  oldPassword,
  newPassword,
  repeatNewPassword,
  save,
  attr: {
    class: 'user-page',
  },
});
