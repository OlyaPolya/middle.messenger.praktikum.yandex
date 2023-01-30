const CURRENT_TIME_TMP = 1674567483771;
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

export function getDate(timestamp: number): string {
  let date = '';
  const messageDays = Math.floor(
    (CURRENT_TIME_TMP - timestamp * 1000) / MILLISECONDS_PER_DAY
  );

  if (messageDays === 0) {
    date = `Сегодня`;
  } else {
    const month = MONTH_NAME[new Date(timestamp * 1000).getMonth()];
    const day = new Date(timestamp * 1000).getDate();
    date = `${day} ${month}`;
  }

  return date;
}
