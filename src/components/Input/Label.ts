import Block from '../../utils/Block';
import './style.scss';

// const input = `
// <label class="{{{labelClasses}}}">
//   <span class="label-input__subtitle">{{{labelValue}}}</span>
//   <input type="{{{typeInput}}}" class="form-input {{{inputClasses}}}" name="{{{inputName}}}" value="{{{inputValue}}}">
// </label>`;

const template = `
  <span class="label-input__subtitle">{{{value}}}</span>
  {{{input}}}`;

class Input extends Block {
  render() {
    return this.compile(template);
  }
}

export default Input;