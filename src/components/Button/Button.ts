import Block from '../../utils/Block';
import './style.scss';
import template from './template';

class Button extends Block {
  render() {
    return this.compile(template);
  }
}

export default Button;
