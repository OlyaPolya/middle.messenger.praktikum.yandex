import './style.scss';
import Wrap from '../../components/Input/Wrap';
import Button from '../../components/Button/Button';
import { buttonFixture, labelFixture } from './fixtures';
import SignUp from './SignUp';
import isValidField from '../../utils/validate/isValidField';
import validateForm from '../../utils/validate/validateForm';

const email = new Wrap('label', labelFixture.email);
const login = new Wrap('label', labelFixture.login);
const firstName = new Wrap('label', labelFixture.firstName);
const secondName = new Wrap('label', labelFixture.secondName);
const phone = new Wrap('label', labelFixture.phone);
const password = new Wrap('label', labelFixture.password);
const repeatPassword = new Wrap('label', labelFixture.repeatPassword);
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
  events: {
    focus: (e: Event) => {
      isValidField(e.target as HTMLInputElement);
    },
    blur: (e: Event) => {
      isValidField(e.target as HTMLInputElement);
    },
    click: (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      validateForm();
    },
  },
});

export default SignUpPage;
