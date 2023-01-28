export const pageLayout = `
 <div class="user-page-form">
 <div class="user-page-form__left-panel"></div>
 <div class="user-page-form__main-panel">
  <div class="user-page-form__header">
    <div class="header__user-image">
       <img class="header__user-image_avatar" src="" alt="user photo" name="avatar">
    </div>
    <div class="header__username">Иван</div>
  </div>
  <div class="user-page-form__data">{{{userData}}}</div>
  <div class="user-page-form__buttons">{{{buttons}}}</div>
 </div>
 </div>
`;