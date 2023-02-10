import Handlebars from 'handlebars';
import { buttonFixture, inputFixture } from './fixtures';
import { createButtons } from '../../utils/createButtons';
import { createInputs } from '../../utils/createInputs';
import { page } from './pageTemplate';
import './style.scss';
import Button from '../../components/Button/Button';
import renderDom from '../../utils/renderDom';

// const button = new Button({
//   attr: {
//     class: 'Test signin-form__submit button  button__blue',
//     type: 'submit',
//     value: 'Test Войти',
//   },
// });



// export function createSignInPage() {


//   const formTemplate = Handlebars.compile(page);
//   const inputsTemplate = createInputs(inputFixture);
//   const buttonsTemplate = createButtons(buttonFixture);

//   const pageLayout = formTemplate({
//     buttons: buttonsTemplate,
//     inputs: inputsTemplate,
//     //buttons: `${button.getContent()}`,
//   });

//   return pageLayout;
// }
