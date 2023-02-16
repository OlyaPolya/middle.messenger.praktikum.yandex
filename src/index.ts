import './style.scss';
import { usersSenders } from './pages/ChatPage/APITamplate/ChatsListUsers';
import { createChatPage } from './pages/ChatPage/index';
import { userMessages } from './pages/ChatPage/APITamplate/FeedMessage';
import { createProfilePage } from './pages/ProfilePage/index';
import {
  buttonsProfile,
  fieldsProfile,
  fieldsPasswordProfile,
  buttonsSaveProfile,
} from './pages/ProfilePage/fixtures';
import { ServerError, RequestError } from './pages/ErrorPage/index';
import SignInPage from './pages/SignInPage/index';
import SignUpPage from './pages/SignUpPage/index';
import renderDOM from './utils/renderDom';

const SignInPageComponent = {
  render: () => renderDOM('.main', SignInPage),
};

const SignUpPageComponent = {
  render: () => renderDOM('.main', SignUpPage),
};

const ChatPageComponent = {
  render: () => createChatPage(usersSenders, userMessages),
};

const ProfilePageComponent = {
  render: () => createProfilePage(fieldsProfile, buttonsProfile, 'readonly'),
};

const ChangePasswordComponent = {
  render: () => createProfilePage(fieldsPasswordProfile, buttonsSaveProfile),
};

const ChangeProfileComponent = {
  render: () => createProfilePage(fieldsProfile, buttonsSaveProfile),
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
  { path: '/change-password', component: ChangePasswordComponent },
  { path: '/change-profile', component: ChangeProfileComponent },
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
    routes.find((route) => route.path.match(new RegExp(`^\\${path}$`, 'gm')))
    || undefined
  );
}

const router = () => {
  const path = parseLocation();
  const { component = RequestErrorPageComponent } = findComponentByPath(path, routes) || {};
  component.render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
