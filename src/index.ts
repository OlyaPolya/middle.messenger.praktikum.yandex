import './style.scss';
import { createSignInPage } from './utils/SignInPage/index';
import { createSignUpPage } from './utils/SignUpPage/index';
import { usersSenders } from './utils/ChatPage/APITamplate/ChatsListUsers';
import { createChatPage } from './utils/ChatPage/index';
import { userMessages } from './utils/ChatPage/APITamplate/FeedMessage';
import { createProfilePage } from './utils/ProfilePage/index';
import { buttonsProfile, fieldsProfile, fieldsPasswordProfile, buttonsSaveProfile } from './utils/ProfilePage/fixtures';
import { createErrorPage } from './utils/ServerErrorPage/index';

const section = document.querySelector('.main');
if (section) {
  // section.innerHTML = createSignInPage();
  section.innerHTML = createProfilePage(fieldsProfile, buttonsProfile, 'readonly');
  
}

function createPage(classList: string) {
  let page = '';

  if (classList.includes('list-item__signin')) {
    page = createSignInPage();
  } else if (classList.includes('list-item__signup')) {
    page = createSignUpPage();
  } else if (classList.includes('list-item__chat')) {
    page = createChatPage(usersSenders, userMessages);
  } else if (classList.includes('list-item__profile')) {
    page = createProfilePage(fieldsProfile, buttonsProfile, 'readonly');
  } else if (classList.includes('list-item__change-password')) {
    page = createProfilePage(fieldsPasswordProfile, buttonsSaveProfile);
  } else if (classList.includes('list-item__change-profile')) {
    page = createProfilePage(fieldsProfile, buttonsSaveProfile);
  } else if (classList.includes('list-item__404')) {
    page = createErrorPage('404', 'Не туда попали');
  } else if (classList.includes('list-item__500')) {
    page = createErrorPage('500', 'Мы уже фиксим');
  }

  if (section) {
    section.innerHTML = page;
  }

  const activeDialog = document.querySelector('.chat-preview:last-child');
  if (activeDialog) {
    activeDialog.classList.add('chat-preview-active');
  }
}

function createListeners() {
  const listPages = document.querySelectorAll('.modal__list-item');
  listPages.forEach((item) => {
    item.addEventListener('click', (element) => {
      const itemClasses = element.target as HTMLElement;
      if (itemClasses) {
        createPage(itemClasses.className); 
      }
    })
  })
}

createListeners();