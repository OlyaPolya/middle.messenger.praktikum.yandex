import Handlebars from 'handlebars';
import { pageLayout } from './ProfileTemplate';
import { IField, IButton} from'./types';
import { field } from '../../components/ProfileField';
import { createButtons } from '../../modules/createButtons';

export function createFields(fields: IField[], readable?: string) {
  const fieldTemplate = Handlebars.compile(field);
  const readonly = readable === undefined ? null : readable;

  const fieldsList = fields.reduce((concat, field) => {
    
    return (
      concat +
      fieldTemplate({
        fieldClasses: field.fieldClasses,
        fieldName: field.fieldNameValue,
        inputClass: field.inputClasses,
        inputName: field.inputName,
        userData: field.userData,
        readable: readonly,
        type: field.type,
      })
    );
  }, '');

  return fieldsList;
}

export function createProfilePage(fields: IField[], buttons: IButton[], readable?: string) {
  const pageTemplate = Handlebars.compile(pageLayout);
  const userInfo = createFields(fields, readable);
  const buttonsList = createButtons(buttons);

  const page = pageTemplate({
    userData: userInfo,
    buttons: buttonsList,
  });

  return page;
}