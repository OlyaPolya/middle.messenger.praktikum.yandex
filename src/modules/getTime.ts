import { getHour } from './getHour';

const CURRENT_TIME_TMP = 1674567483771;
const MILLISECONDS_PER_DAY = 86400000;
const WEEK_DAY = ['Вс', 'Пн', 'ВТ', 'Ср', 'Чт', 'Пт', 'Сб'];
const MONTH_NAME = ['Янв', 'Фев', 'Мар', 'Апр', 'Мая', , 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

export function getTime(timestamp: number): string {
  let time = '';
  const messageDays = Math.floor((CURRENT_TIME_TMP - timestamp * 1000) / MILLISECONDS_PER_DAY);

  if (messageDays === 0) {
    time = getHour(timestamp);
  } else if (messageDays >= 1 && messageDays <= 7) {
    const day = new Date(timestamp * 1000).getDay();
    time = WEEK_DAY[day];
  } else {
    const year = new Date(timestamp * 1000).getFullYear();
    const month = MONTH_NAME[new Date(timestamp * 1000).getMonth()];
    const day = new Date(timestamp * 1000).getDate();
    time = `${day} ${month} ${year}`;
  }

  return time;
}
