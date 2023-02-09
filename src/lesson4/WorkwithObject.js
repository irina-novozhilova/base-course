export function showWorkWithObject() {
  const user = {
    name: "John",
  };
  user.age = prompt("Введите число");
  const admin = { ...user, role: "admin" };
  const { name, age, role } = admin;
  console.log(name, age, role);
}
