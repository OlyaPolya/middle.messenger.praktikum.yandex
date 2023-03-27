import Block from '../../../services/Block';
import template from './template';
import InputsProp from './types';

class Inputs extends Block<InputsProp> {
  render(): string {
    return this.compile(template);
  }
}

export default Inputs;
