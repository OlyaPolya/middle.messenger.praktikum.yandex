import Block from '../../services/Block';
import template from './template';
import SignUpProp from './types';

class SignUp extends Block<SignUpProp> {
  render() {
    return this.compile(template);
  }
}

export default SignUp;
