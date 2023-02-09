export function whatKindOfString() {
  const input = prompt("Enter string");
  const regexpData = /[0-3]{1}[1-9]{1}\.[0-1]{1}[1-9]\.[0-9]{1,4}/;
  const regexpEmail = /[a-zA-Z_.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;
  const regexpPhone = /^((\+7|7|8)+([0-9]){10})$/;

  if (regexpData.test(input)) {
    return "It is date";
  } if (regexpEmail.test(input)) {
    return "It is email";
  } if (regexpPhone.test(input)) {
    return "It is phone";
  } 
    return "ERROR";
  
}
