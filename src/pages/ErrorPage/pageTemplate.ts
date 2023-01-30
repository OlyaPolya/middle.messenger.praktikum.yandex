import "./style.scss";

export const pageLayout = `
<div class="error-page">
  <h1 class="error-page__title">{{{errorCode}}}</h1>
  <p class="error-page__description">{{{errorMessage}}}</p>
  <a class="error-page__back-link" href="#">Назад к чатам</a>
</div>
`;
