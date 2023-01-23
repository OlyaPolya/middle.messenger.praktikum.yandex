import Handlebars from 'handlebars';
import button from '../components/Button';
import { buttonI } from '../utils/SignIn/types';

export function createButtons(buttonsFixture: buttonI[]) {
  const buttonTemplate = Handlebars.compile(button);
  const buttons = buttonsFixture.reduce((concat, button) => {
    return (
      concat +
      buttonTemplate({
        classes: button.classes,
        value: button.value,
      })
    );
  }, '');

  return buttons;
}
