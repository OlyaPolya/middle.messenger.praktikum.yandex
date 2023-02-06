import Button from './Button';
import render from '../../utils/renderDom';

const button = new Button({
  button: 'Test signin',
  classes: 'Test signin-form__submit button  button__blue',
  value: 'Test Войти',
  type: 'type="submit"',
});

// app — это class дива в корне DOM
render('.app', button);
