import Handlebars from 'handlebars';
import { pageLayout }  from './pageTemplate';

export function createErrorPage(code: string, message: string) {
  const pageTemplate = Handlebars.compile(pageLayout);
  const page = pageTemplate({
    errorCode: code,
    errorMessage: message,
  });

  return page;
}