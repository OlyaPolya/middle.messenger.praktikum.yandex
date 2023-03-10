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

export default template;
