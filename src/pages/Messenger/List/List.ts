import Block from '../../../services/Block';
import template from './template';
import { ListProp } from './types';

class List extends Block<ListProp> {
  render(): string {
    return this.compile(template);
  }
}

export default List;
