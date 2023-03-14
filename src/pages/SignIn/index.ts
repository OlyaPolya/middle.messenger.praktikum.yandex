/* eslint-disable no-console */
import './style.scss';
import Wrap from '../../components/Input/Wrap';
import Button from '../../components/Button/Button';
import { buttonsFixture, labelFixture } from './fixtures';
import SignIn from './SignIn';
import validateForm from '../../utils/validate/validateForm';

const login = new Wrap('label', labelFixture.login);
const password = new Wrap('label', labelFixture.password);

const signIn = new Button('button', {
  ...buttonsFixture.signIn,
  events: {
    click: (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Клик по "Войти"');
      validateForm();
    },
  },
});

const signUp = new Button('button', {
  ...buttonsFixture.signUp,
  events: {
    click: (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Клик по "Нет аккаунта"');
      validateForm();
    },
  },
});

const SignInPage = new SignIn('div', {
  login,
  password,
  signIn,
  signUp,
  attr: {
    class: 'signin-page',
  },
});

export default SignInPage;
