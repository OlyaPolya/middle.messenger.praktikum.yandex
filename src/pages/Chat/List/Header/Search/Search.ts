import Block from '../../../../../services/Block';
import template from './template';
import SearchProp from './types';

class Search extends Block<SearchProp> {
  render(): string {
    return this.compile(template);
  }
}

export default Search;
