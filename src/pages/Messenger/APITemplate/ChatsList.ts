import image from '../../../../static/img/user.png';

const list = [
  {
    id: 123,
    title: 'my-chat',
    avatar: image,
    unread_count: 0,
    last_message: {
      user: {
        first_name: 'Petya',
        second_name: 'Pupkin',
        avatar: image,
        email: 'my@email.com',
        login: 'currentUserLogin',
        phone: '89112223322',
      },
      time: '2023-02-10T14:22:22.000Z',
      content: 'Когда на работу?',
    },
  },
  {
    id: 1234,
    title: 'my-chat',
    avatar: '',
    unread_count: 4,
    last_message: {
      user: {
        first_name: 'Kostya',
        second_name: 'Petrov',
        avatar: '',
        email: 'my@email.com',
        login: 'userLogin',
        phone: '89112223322',
      },
      time: '2023-02-15T14:22:22.000Z',
      content:
        `Привет! Смотри, тут всплыл интересный кусок лунной космической истории —
        НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.
        Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки
        этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только
        кассеты с пленкой.`,
    },
  },
  {
    id: 234,
    title: 'my-chat',
    avatar: '',
    unread_count: 0,
    last_message: {
      user: {
        first_name: 'Павел',
        second_name: '',
        avatar: '',
        email: 'my@email.com',
        login: 'userLogin',
        phone: '89112223322',
      },
      time: '2023-02-20T14:04:40.000Z',
      content: 'Изображение',
    },
  },
];

export default list;
