import Block from '../../services/Block';
import './style.scss';
import template from './template';

class Wrap extends Block {
  render() {
    return this.compile(template);
  }
}

export default Wrap;