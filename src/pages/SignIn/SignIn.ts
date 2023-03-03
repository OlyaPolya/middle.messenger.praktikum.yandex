import Block from '../../services/Block';
import template from './template';
import SignInProp from './types';

class SignIn extends Block<SignInProp> {
  render() {
    return this.compile(template);
  }

  addEvents(): void {
    this.element?.querySelectorAll('input').forEach((input) => {
      input.addEventListener('focus', this.props.events.focus);
    });
    this.element?.querySelectorAll('input').forEach((input) => {
      input.addEventListener('blur', this.props.events.blur);
    });
    this.element?.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', this.props.events.click);
    });
  }
}

export default SignIn;
