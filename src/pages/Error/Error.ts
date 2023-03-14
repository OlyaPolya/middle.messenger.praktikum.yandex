import './style.scss';
import Block from '../../services/Block';
import template from './template';
import ErrorProp from './types';

class Error extends Block<ErrorProp> {
  render() {
    return this.compile(template);
  }
}

export default Error;
