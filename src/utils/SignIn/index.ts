import Handlebars from 'handlebars';
import { buttonFixture, inputFixture } from './fixtures';
import { createButtons } from '../../modules/createButtons';
import { createInputs } from '../../modules/createInputs';
import { page } from './pageTemplate';

export function createSignInPage() {
  const formTemplate = Handlebars.compile(page);
  const inputsTemplate = createInputs(inputFixture);
  const buttonsTemplate = createButtons(buttonFixture);
  const pageLayout = formTemplate({
    inputs: inputsTemplate,
    buttons: buttonsTemplate,
  });

  const section = document.querySelector('.main');

  if (section) {
    section.innerHTML = pageLayout;
  }

}

