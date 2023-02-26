import Block from '../../../services/Block';
import template from './template';

class List extends Block {
  render(): string {
    return this.compile(template);
  }
}

export default List;
