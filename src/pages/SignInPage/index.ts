import { createButtons } from '../../utils/createButtons';
import { createInputs } from '../../utils/createInputs';
import './style.scss';
import Label from '../../components/Input/Label';
import Button from '../../components/Button/Button';
import { buttonsFixture, labelFixture } from './fixtures';
import SignIn from './SignIn';

const labelLogin = new Label('label', labelFixture.login);
const labelPassword = new Label('label', labelFixture.password);
const buttonSignIn = new Button('button', buttonsFixture.buttonSignIn);
const buttonSignUp = new Button('button', buttonsFixture.buttonSignUp);

const SignInPage = new SignIn('div', {
  login: labelLogin,
  password: labelPassword,
  signIn: buttonSignIn,
  signUp: buttonSignUp,
  attr: {
    class: 'signin-page',
  },
});

export default SignInPage;
