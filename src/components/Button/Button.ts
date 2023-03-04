import Block from '../../services/Block';
import './style.scss';
import template from './template';
import ButtonProp from './types';

class Button extends Block<ButtonProp> {
  render() {
    return this.compile(template);
  }
}

export default Button;
