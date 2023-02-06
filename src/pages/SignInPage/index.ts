import Handlebars from 'handlebars';
import { buttonFixture, inputFixture } from './fixtures';
import { createButtons } from '../../utils/createButtons';
import { createInputs } from '../../utils/createInputs';
import { page } from './pageTemplate';
import './style.scss';

export function createSignInPage() {
  const formTemplate = Handlebars.compile(page);
  const inputsTemplate = createInputs(inputFixture);
  const buttonsTemplate = createButtons(buttonFixture);


  const pageLayout = formTemplate({
    inputs: inputsTemplate,
    buttons: buttonsTemplate,
  });

  return pageLayout;
}
