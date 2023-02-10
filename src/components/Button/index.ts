import Button from './Button';
// import renderDOM from '../../utils/renderDom';

const button = new Button({
  'button',
  attr: {
    class: 'Test signin-form__submit button  button__blue',
    type: 'submit',
    value: 'Test Войти',
  },
  events: () => console.log('клик по кнопке')
});

// app — это class дива в корне DOM
// renderDOM('.app', button);
