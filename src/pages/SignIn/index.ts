import './style.scss';
import Wrap from '../../components/Input/Wrap';
import Button from '../../components/Button/Button';
import { buttonsFixture, labelFixture } from './fixtures';
import SignIn from './SignIn';

const login = new Wrap('label', labelFixture.login);
const password = new Wrap('label', labelFixture.password);
const signIn = new Button('button', buttonsFixture.signIn);
const signUp = new Button('button', buttonsFixture.signUp);

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
