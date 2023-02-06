import Handlebars from 'handlebars';
import buttonTemplate from './template';
import Block from '../../utils/Block';

type ButtonType = {
  button: string;
  classes: string;
  value: string;
  type?: string;
};

class Button extends Block {
  constructor(props: ButtonType) {
    super('button', props);
  }

  render = () => {
    const template = Handlebars.compile(buttonTemplate);
    const type = this.props.type ? this.props.type : null;
    const button = template({
      classes: this.props.classes,
      value: this.props.value,
      buttonType: type,
    });

    return button;
  };
}

export default Button;
