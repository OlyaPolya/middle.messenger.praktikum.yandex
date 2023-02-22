const template = `
 <div class="user-page__left-panel"></div>
 <div class="user-page__main-panel">
  <div class="user-page__header">
    <div class="header__user-image">
       <img class="header__user-image_avatar" src="" alt="user photo" name="avatar">
    </div>
    <div class="header__username">Иван</div>
  </div>
  <form class="user-page-form form">
    <div class="user-page-form__data">
      {{{email}}}
      {{{login}}}
      {{{firstName}}}
      {{{secondName}}}
      {{{displayName}}}
      {{{phone}}}
      {{{oldPassword}}}
      {{{newPassword}}}
      {{{repeatNewPassword}}}
    </div>
    <div class="user-page-form__buttons">
      {{{changeData}}}
      {{{changePassword}}}
      {{{signOut}}}
      {{{save}}}
    </div>
  </form>
 </div>
`;

export default template;
