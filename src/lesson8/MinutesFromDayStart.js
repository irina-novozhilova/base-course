export function getMinutesFromDayStart() {
  const nowTime = new Date(); // текущее время
  const hrs = nowTime.getHours(); // часов прошло
  const min = nowTime.getMinutes(); // минут прошло
  return hrs * 60 + min;
}
