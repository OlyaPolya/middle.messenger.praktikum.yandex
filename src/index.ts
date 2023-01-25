import './styles.scss';
import { createSignInPage } from './utils/SignInPage/index';
import { createSignUpPage } from './utils/SignUpPage/index';
import { createFeed } from './utils/ChatPage/ChatFeed/index';
import { usersSenders } from './utils/ChatPage/APITamplate/ChatsListUsers';
import { createChatPage } from './utils/ChatPage/index';
import { userMessages } from './utils/ChatPage/APITamplate/FeedMessage';
import { createProfilePage } from './utils/ProfilePage/index';
import { buttonsProfile, fieldsProfile, fieldsPasswordProfile, buttonsSaveProfile } from './utils/ProfilePage/fixtures';
import { createErrorPage } from './utils/ServerErrorPage/index';

//createSignInPage();
//createSignUpPage();
//createChatPage(usersSenders, userMessages);
//createField(fieldsFixture)
//createProfilePage(fieldsPasswordProfile, buttonsSaveProfile);

const section = document.querySelector('.main');

function createPage(classList: string) {
  let page = '';

  if (classList.includes('list-item__signin')) {
    page = createSignInPage();
  } else if (classList.includes('list-item__signup')) {
    page = createSignUpPage();
  }

  if (section) {
    section.innerHTML = page;
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