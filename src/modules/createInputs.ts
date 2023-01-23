import Handlebars from 'handlebars';
import input from '../components/Input';
import { inputI } from '../utils/SignIn/types';

export function createInputs(inputFixture: inputI[]) {
  const inputTemplate = Handlebars.compile(input);
  const inputs = inputFixture.reduce((concat, input) => {
    return (
      concat +
      inputTemplate({
        labelClasses: input.labelClasses,
        labelValue: input.labelValue,
        typeInput: input.typeInput,
        inputClasses: input.inputClasses,
      })
    );
  }, '');

  return inputs;
}
