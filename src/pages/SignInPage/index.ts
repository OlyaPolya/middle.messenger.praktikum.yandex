import './style.scss';
import Label from '../../components/Input/Label';
import Button from '../../components/Button/Button';
import { buttonsFixture, labelFixture } from './fixtures';
import SignIn from './SignIn';

const login = new Label('label', labelFixture.login);
const password = new Label('label', labelFixture.password);
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
