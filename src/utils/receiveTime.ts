function receiveTime(time: Date) {
  let hoursAndMinutes = '';

  const hours = time.getHours();
  const minutes = time.getMinutes();
  if (minutes < 10) {
    hoursAndMinutes = `${hours}:0${minutes}`;
  } else {
    hoursAndMinutes = `${hours}:${minutes}`;
  }
  return hoursAndMinutes;
}

export default receiveTime;
