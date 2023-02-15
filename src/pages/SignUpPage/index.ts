import "./style.scss";
import Label from '../../components/Input/Label';
import Button from '../../components/Button/Button';
import { buttonFixture, labelFixture } from './fixtures';
import SignUp from './SignUp';

const email = new Label('label', labelFixture.email);
const login = new Label('label', labelFixture.login);
const firstName = new Label('label', labelFixture.firstName);
const secondName = new Label('label', labelFixture.secondName);
const phone = new Label('label', labelFixture.phone);
const password = new Label('label', labelFixture.password);
const repeatPassword = new Label('label', labelFixture.repeatPassword);
const signupButton = new Button('button', buttonFixture.signup);
const loginButton = new Button('button', buttonFixture.login);

const SignUpPage = new SignUp('div', {
  email,
  login,
  firstName,
  secondName,
  phone,
  password,
  repeatPassword,
  signupButton,
  loginButton,
  attr: {
    class: 'signup-page',
  },
});

export default SignUpPage;
