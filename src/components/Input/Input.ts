import Block from '../../services/Block';
import './style.scss';
import InputProp from './types';

const template = '';

class Input extends Block<InputProp> {
  render() {
    return this.compile(template);
  }
}

export default Input;
