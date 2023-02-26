import './style.scss';
import Block from '../../services/Block';
import template from './template';

class Error extends Block {
  render() {
    return this.compile(template);
  }
}

export default Error;
