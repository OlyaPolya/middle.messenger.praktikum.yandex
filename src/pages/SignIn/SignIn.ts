import Block from '../../services/Block';
import template from './template';
import SignInProp from './types';

class SignIn extends Block<SignInProp> {
  render() {
    return this.compile(template);
  }
}

export default SignIn;
