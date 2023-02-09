export function showWhichUserIsYounger(person1, person2) {
  const [day1, month1, year1] = person1.split(".");
  const [day2, month2, year2] = person2.split(".");
  const date1 = new Date(`${year1}-${month1}-${day1}`);
  const date2 = new Date(`${year2}-${month2}-${day2}`);
  const diff = date1 - date2;

  if (diff > 0) {
    return "Первый персонаж младше второго";
  }
  if (diff < 0) {
    return "Первый персонаж старше второго";
  }
  return "Персонажи одинакового возраста";
}
