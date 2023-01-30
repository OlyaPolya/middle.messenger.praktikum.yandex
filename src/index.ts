import './style.scss';
import { createSignInPage } from './pages/SignInPage/index';
import { createSignUpPage } from './pages/SignUpPage/index';
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
import { createErrorPage } from './pages/ErrorPage/index';

const SignInPageComponent = {
  render: () => {
    return createSignInPage();
  },
};

const SignUpPageComponent = {
  render: () => {
    return createSignUpPage();
  },
};

const ChatPageComponent = {
  render: () => {
    return createChatPage(usersSenders, userMessages);
  },
};

const ProfilePageComponent = {
  render: () => {
    return createProfilePage(fieldsProfile, buttonsProfile, 'readonly');
  },
};

const ChangePasswordComponent = {
  render: () => {
    return createProfilePage(fieldsPasswordProfile, buttonsSaveProfile);
  },
};

const ChangeProfileComponent = {
  render: () => {
    return createProfilePage(fieldsProfile, buttonsSaveProfile);
  },
};

const NotFoundPageComponent = {
  render: () => {
    return createErrorPage('404', 'Не туда попали');
  },
};

const ErrorPageComponent = {
  render: () => {
    return createErrorPage('500', 'Мы уже фиксим');
  },
};

const routes = [
  { path: '/', component: SignInPageComponent },
  { path: '/signup', component: SignUpPageComponent },
  { path: '/chat', component: ChatPageComponent },
  { path: '/profile', component: ProfilePageComponent },
  { path: '/change-password', component: ChangePasswordComponent },
  { path: '/change-profile', component: ChangeProfileComponent },
  { path: '/404', component: NotFoundPageComponent },
  { path: '/500', component: ErrorPageComponent },
];

function parseLocation() {
  return location.hash.slice(1).toLowerCase() || '/';
}

function findComponentByPath(
  path: string,
  routes: {
    path: string;
    component: {
      render: () => string;
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
  const { component = ErrorPageComponent } =
    findComponentByPath(path, routes) || {};
  const section = document.querySelector('.main');
  if (section) {
    section.innerHTML = component.render();
  }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
