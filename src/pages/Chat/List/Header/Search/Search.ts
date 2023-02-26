import Block from '../../../../../services/Block';
import template from './template';

class Search extends Block {
  render(): string {
    return this.compile(template);
  }
}

export default Search;
