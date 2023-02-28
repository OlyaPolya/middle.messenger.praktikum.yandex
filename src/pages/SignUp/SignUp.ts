import Block from '../../services/Block';

const template = `
  <h1 class="signup-page__title">Регистрация</h1>
  <form class="signup-form form">
    <div class="form__inputs-block">
      {{{email}}}
      {{{login}}}
      {{{firstName}}}
      {{{secondName}}}
      {{{phone}}}
      {{{password}}}
      {{{repeatPassword}}}
    </div>
    <div class="signup-form__buttons form__buttons">
      {{{signupButton}}}
      {{{loginButton}}}
    </div>
  </form>`;

class SignUp extends Block {
  render() {
    return this.compile(template);
  }

  _addEvents(): void {
    this.element?.querySelectorAll('input').forEach((input) => {
      input.addEventListener('focus', this.props.events.focus);
    });
    this.element?.querySelectorAll('input').forEach((input) => {
      input.addEventListener('blur', this.props.events.blur);
    });
    this.element?.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', this.props.events.click);
    });
  }
}

export default SignUp;
