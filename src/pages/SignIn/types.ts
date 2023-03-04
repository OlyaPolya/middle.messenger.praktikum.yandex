import Wrap from '../../components/Input/Wrap';
import Button from '../../components/Button/Button';

type SignInProp = {
  login: Wrap;
  password: Wrap;
  signIn: Button;
  signUp: Button;
  attr: {
    class: string;
  };
};

export default SignInProp;
