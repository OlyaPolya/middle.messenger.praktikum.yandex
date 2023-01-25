import './styles.scss';
import { createSignInPage } from './utils/SignIn';
import { createSignUpPage } from './utils/SignUp';
import { createFeed } from './utils/ChatPage/ChatFeed/index';
import { usersSenders } from './utils/ChatPage/APITamplate/ChatsListUsers';
import { createChatPage } from './utils/ChatPage/index';
import { userMessages } from './utils/ChatPage/APITamplate/FeedMessage';
import { createProfilePage } from './utils/Profile/index';
import { buttonsProfile, fieldsProfile, fieldsPasswordProfile, buttonsSaveProfile } from './utils/Profile/fixtures';

//createSignInPage();
//createSignUpPage();
//createChatPage(usersSenders, userMessages);
//createField(fieldsFixture)


const section = document.querySelector('.main');

 if (section) {
   section.innerHTML = createProfilePage(fieldsPasswordProfile, buttonsSaveProfile);
 }
