import './style.scss';
import { ServerError, RequestError } from './pages/Error/index';
import SignInPage from './pages/SignIn/index';
import SignUpPage from './pages/SignUp/index';
import renderDOM from './utils/renderDom';
import ChatPage from './pages/Chat/index';
import ProfilePage from './pages/Profile/index';
import Tooltip from './services/Tooltip/Tooltip';

const SignInPageComponent = {
  render: () => renderDOM('.main', SignInPage),
};

const SignUpPageComponent = {
  render: () => renderDOM('.main', SignUpPage),
};

const ChatPageComponent = {
  render: () => renderDOM('.main', ChatPage),
};

const ProfilePageComponent = {
  render: () => {
    renderDOM('.main', ProfilePage);
    console.log('Работают кнопки "Изменить данные" и "Изменить пароль"');
  },
};


const RequestErrorPageComponent = {
  render: () => renderDOM('.main', RequestError),
};

const ServerErrorPageComponent = {
  render: () => renderDOM('.main', ServerError),
};

const routes = [
  { path: '/', component: SignInPageComponent },
  { path: '/signup', component: SignUpPageComponent },
  { path: '/chat', component: ChatPageComponent },
  { path: '/profile', component: ProfilePageComponent },
  { path: '/404', component: RequestErrorPageComponent },
  { path: '/500', component: ServerErrorPageComponent },
];

function parseLocation() {
  return window.location.hash.slice(1).toLowerCase() || '/';
}

function findComponentByPath(
  path: string,
  routes: {
    path: string;
    component: {
      render: () => Element;
    };
  }[]
) {
  return (
    routes.find((route) => route.path.match(new RegExp(`^\\${path}$`, 'gm'))) ||
    undefined
  );
}

const router = () => {
  const path = parseLocation();
  const { component = RequestErrorPageComponent } =
    findComponentByPath(path, routes) || {};
  component.render();
  const tooltip = new Tooltip();
  tooltip.attach(document.body);
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
