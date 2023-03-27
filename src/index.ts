import './style.scss';
import { ServerError, RequestError } from './pages/Error/index';
import SignInPage from './pages/SignIn/index';
import SignUpPage from './pages/SignUp/index';
import renderDOM from './utils/renderDom';
import MessengerPage from './pages/Messenger/index';
import ProfilePage from './pages/Settings/index';
import Tooltip from './services/Tooltip/Tooltip';
import Router from './services/Router';

/**
 / — страница входа (sign in),
/sign-up — страница регистрации,
/settings — настройки профиля пользователя,
/messenger — чат.
 */
const API_URL = 'http://ya-praktikum.tech/api/v2';
enum Routes {
  Index = '/',
  SignUp = '/sign-up',
  Profile = '/settings',
  Messenger = '/messenger',
}

window.addEventListener(' DOMContentLoaded', async () => {
  Router.use(API_URL + Routes.Index, SignInPage)
    .use(API_URL + Routes.SignUp, SignUpPage)
    .use(API_URL + Routes.Profile, ProfilePage)
    .use(API_URL + Routes.Messenger, MessengerPage);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.SignUp:
      isProtectedRoute = false;
      break;
    default:
      break;
  }

  try {
    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Profile);
    }
  } catch (error) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }
});

// const router = new Router('.main');

// const SignInPageComponent = {
//   render: () => renderDOM('.main', SignInPage),
// };

// const SignUpPageComponent = {
//   render: () => renderDOM('.main', SignUpPage),
// };

// const MessengerPageComponent = {
//   render: () => renderDOM('.main', MessengerPage),
// };

// const ProfilePageComponent = {
//   render: () => {
//     renderDOM('.main', ProfilePage);
//     // eslint-disable-next-line no-console
//     console.log('Работают кнопки "Изменить данные" и "Изменить пароль"');
//   },
// };

// const RequestErrorPageComponent = {
//   render: () => renderDOM('.main', RequestError),
// };

// const ServerErrorPageComponent = {
//   render: () => renderDOM('.main', ServerError),
// };

// const routes = [
//   { path: '/', component: SignInPageComponent },
//   { path: '/signup', component: SignUpPageComponent },
//   { path: '/Messenger', component: MessengerPageComponent },
//   { path: '/profile', component: ProfilePageComponent },
//   { path: '/404', component: RequestErrorPageComponent },
//   { path: '/500', component: ServerErrorPageComponent },
// ];

// function parseLocation() {
//   return window.location.hash.slice(1).toLowerCase() || '/';
// }

// function findComponentByPath(
//   path: string,
// ) {
//   return (
//     routes.find((route) => route.path.match(new RegExp(`^\\${path}$`, 'gm')))
//     || undefined
//   );
// }

// const router = () => {
//   const path = parseLocation();
//   const { component = RequestErrorPageComponent } = findComponentByPath(path) || {};
//   component.render();
//   const tooltip = new Tooltip();
//   tooltip.attach(document.body);
// };

// window.addEventListener('hashchange', router);
// window.addEventListener('load', router);

/**
 // DOMContentLoaded срабатывает на построение DOM-дерева
document.addEventListener("DOMContentLoaded", () => {
  // DOM-дерево построено, но загружены не все ресурсы
});
// DOMContentLoaded зависит от скриптов на странице

// load срабатывает, когда все ресурсы (стили, шрифты, картинки) будут загружены
document.addEventListener("load", () => {
  // Все ресурсы загружены
});
 */
