import template from './template';
import Block from '../../utils/Block';

type Attribute = {
  class?: string;
  type?: string;
};

type ButtonProps = {
  label?: string;
  attr: Attribute;
  events?: {
    click: (e: any) => void;
  };
};

class Button extends Block {
  render() {
    return this.compile(template);
  };
}

export default Button;
