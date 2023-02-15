import Block from '../../utils/Block';
import './style.scss';

export const template = '{{{ textContent }}}';

class Button extends Block {
  render() {
    return this.compile(template);
  }
}

export default Button;
