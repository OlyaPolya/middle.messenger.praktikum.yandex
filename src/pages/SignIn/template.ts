const template = `
  <h1 class="signin-page__title">Вход</h1>
  <form class="signin-form form">
    <div class="form__inputs-block">
      {{{ login }}}
      {{{ password }}}
    </div>
    <div class="signin-form__buttons form__buttons">
      {{{ signIn }}}
      {{{ signUp }}}
    </div>
    </form>`;

export default template;
