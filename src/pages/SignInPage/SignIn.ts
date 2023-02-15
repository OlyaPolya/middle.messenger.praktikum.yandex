import Block from '../../utils/Block';

const template = `
  <h1 class="signin-page__title">Вход</h1>
  <form class="signin-form">
    <div class="form__inputs-block">
      {{{ login }}}
      {{{ password }}}
    </div>
    <div class="signin-form__buttons form__buttons">
      {{{ signIn }}}
      {{{ signUp }}}
    </div>
    </form>`;

class SignIn extends Block {
  render() {
    return this.compile(template);
  }
}

export default SignIn;
