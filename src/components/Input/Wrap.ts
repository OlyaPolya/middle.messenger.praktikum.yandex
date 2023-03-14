import Block from '../../services/Block';
// import Input from './Input';
import './style.scss';
import template from './template';

// type LabelProp = {
//   spanClass: string;
//   value: string;
//   input: Input;
//   attr: {
//     class: string;
//   };
// };

class Wrap extends Block {
  render() {
    return this.compile(template);
  }
}

export default Wrap;
