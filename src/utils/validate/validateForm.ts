import isValidField from './isValidField';

function validateForm(): boolean {
  const form = document.querySelector('.form');

  if (form) {
    const inputsForm = form.querySelectorAll('input');
    const inputsArray = Array.from(inputsForm).filter((input) => {
      if (input.hasAttribute('disabled')) {
        return false;
      }
      return true;
    });

    const isValid = inputsArray.every((input) => isValidField(input) === true);

    type FormData = {
      [key: string]: string;
    };
    const formData: FormData = {};

    if (isValid) {
      inputsArray.forEach((input) => {
        formData[`${input.name}`] = input.value;
      });

      // eslint-disable-next-line no-console
      console.log(formData);
    }

    return isValid;
  }
  return false;
}

export default validateForm;
