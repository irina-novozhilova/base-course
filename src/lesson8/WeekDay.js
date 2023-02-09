export function showWeekDay() {
  const input = prompt("ДД.ММ.ГГГГ");
  const [day, month, year] = input.split(".");
  const inputDate = new Date(`${year}-${month}-${day}`);
  const now = inputDate.getDay();
  const weekDays = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];

  return weekDays[now];
}
