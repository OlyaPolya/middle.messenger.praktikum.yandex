const MILLISECONDS_PER_DAY = 86400000;
const MONTH_NAME = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
];

function receiveDay(time: string): string {
  const messageTime = new Date(time);
  const now = new Date();
  let date;

  const daysOfMessage = Math.floor(
    (now.getTime() - messageTime.getTime()) / MILLISECONDS_PER_DAY
  );

  if (daysOfMessage === 0) {
    date = 'Сегодня';
  } else {
    const month = MONTH_NAME[messageTime.getMonth()];
    const day = messageTime.getDate();
    date = `${day} ${month}`;
  }

  return date;
}

export default receiveDay;
