import Handlebars from 'handlebars';
import input from '../components/Input';
import { IInput } from '../pages/SignInPage/types';

export function createInputs(inputFixture: IInput[]) {
  const inputTemplate = Handlebars.compile(input);
  const inputs = inputFixture.reduce((concat, input) => {
    return (
      concat +
      inputTemplate({
        labelClasses: input.labelClasses,
        labelValue: input.labelValue,
        typeInput: input.typeInput,
        inputClasses: input.inputClasses,
        inputName: input.inputName,
        inputValue: input.inputValue,
      })
    );
  }, '');

  return inputs;
}
