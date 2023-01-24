export function getHour(timestamp: number): string {
  let time = '';
  
    const hours = new Date(timestamp * 1000).getHours();
    let minutes = new Date(timestamp * 1000).getMinutes();
    if (minutes < 10) {
      time = `${hours}:0${minutes}`;
    } else {
      time = `${hours}:${minutes}`;
    }

  return time;
}
