import Button from '../../../components/Button/Button';
import { buttonsFixture } from '../fixtures';
import Buttons from './Buttons';

const changeData = new Button('button', buttonsFixture.changeData);
const changePassword = new Button('button', buttonsFixture.changePassword);
const signOut = new Button('button', buttonsFixture.signOut);
const save = new Button('button', buttonsFixture.save);

export const ProfileButtons = new Buttons('div', {
  changeData,
  changePassword,
  signOut,
  attr: {
    class: 'user-page-form__buttons',
  },
});

export const SaveButton = new Buttons('div', {
  save,
  attr: {
    class: 'user-page-form__buttons',
  },
});
