import Wrap from '../../components/Input/Wrap';
import Button from '../../components/Button/Button';

type SignUpProp = {
  email: Wrap;
  login: Wrap;
  firstName: Wrap;
  secondName: Wrap;
  phone: Wrap;
  password: Wrap;
  repeatPassword: Wrap;
  signupButton: Button;
  loginButton: Button;
  attr: {
    class: string;
  };
};

export default SignUpProp;
