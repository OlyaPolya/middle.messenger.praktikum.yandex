import Handlebars from 'handlebars';
import button from '../components/Button/Button';
import { IButton } from '../pages/SignInPage/types';

export function createButtons(buttonsFixture: IButton[]) {
  const buttonTemplate = Handlebars.compile(button);
  const buttons = buttonsFixture.reduce((concat, button) => {
    const type = button.type? button.type : null;

    return (
      concat +
      buttonTemplate({
        classes: button.classes,
        value: button.value,
        buttonType: type,
      })
    );
  }, '');

  return buttons;
}
