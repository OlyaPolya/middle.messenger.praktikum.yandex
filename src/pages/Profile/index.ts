import Wrap from '../../components/Input/Wrap';
import { buttonsFixture, labelFixture } from './fixtures';
import './style.scss';
import Button from '../../components/Button/Button';
import Profile from './Profile';

const email = new Wrap('div', labelFixture.email);
const login = new Wrap('div', labelFixture.login);
const firstName = new Wrap('div', labelFixture.firstName);
const secondName = new Wrap('div', labelFixture.secondName);
const displayName = new Wrap('div', labelFixture.displayName);
const phone = new Wrap('div', labelFixture.phone);
const oldPassword = new Wrap('div', labelFixture.oldPassword);
const newPassword = new Wrap('div', labelFixture.newPassword);
const repeatNewPassword = new Wrap('div', labelFixture.repeatNewPassword);
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
  events: {
    focus: (e: Event) => {
      console.log('focus 1', e.target);
      // isValidField(e.target as HTMLInputElement);
    },
    blur: (e: Event) => {
      console.log('blur 1', e.target);
      // isValidField(e.target as HTMLInputElement);
    },
    click: (e: Event) => {
      console.log(e.target);
      e.preventDefault();
      e.stopPropagation();
      // validateForm();
    },
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
  events: {
    focus: (e: Event) => {
      console.log('focus 2', e.target);
      // isValidField(e.target as HTMLInputElement);
    },
    blur: (e: Event) => {
      console.log('blur 2', e.target);
      // isValidField(e.target as HTMLInputElement);
    },
    click: (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      console.log(e.target);
      // validateForm();
    },
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
  events: {
    focus: (e: Event) => {
      console.log('focus 3', e.target);
      // isValidField(e.target as HTMLInputElement);
    },
    blur: (e: Event) => {
      console.log('blur 3', e.target);
      // isValidField(e.target as HTMLInputElement);
    },
    click: (e: Event) => {
      console.log(e.target);
      e.preventDefault();
      e.stopPropagation();
      // validateForm();
    },
  },
});
