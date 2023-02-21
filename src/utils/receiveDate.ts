import receiveTime from './receiveTime';

const MILLISECONDS_PER_DAY = 86400000;
const WEEK_DAY = ['Вс', 'Пн', 'ВТ', 'Ср', 'Чт', 'Пт', 'Сб'];
const MONTH_NAME = [
  'Янв',
  'Фев',
  'Мар',
  'Апр',
  'Мая',
  'Июн',
  'Июл',
  'Авг',
  'Сен',
  'Окт',
  'Ноя',
  'Дек',
];

function receiveDate(time) {
  const messageTime = new Date(time);
  const now = new Date();
  let date;

  const daysOfMessage = Math.floor(
    (now.getTime() - messageTime.getTime()) / MILLISECONDS_PER_DAY
  );
  if (daysOfMessage === 0) {
    date = receiveTime(messageTime);
  } else if (daysOfMessage >= 1 && daysOfMessage <= 7) {
    const day = messageTime.getDay();
    date = WEEK_DAY[day];
  } else {
    const year = messageTime.getFullYear();
    const month = MONTH_NAME[messageTime.getMonth()];
    const day = messageTime.getDate();
    date = `${day} ${month} ${year}`;
  }

  return date;
}

export default receiveDate;
