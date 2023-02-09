export function createUI(element) {
  const el = element;
  el.innerHTML = `
        <div class="list">
            <p>Это первый текстовый параграф</p>
            <p>Это второй текстовый параграф</p>
            <p>Это третий текстовый параграф</p>
        </div>
        <input class="text-field" type="text" name="" value="">
        <button>Отправить</button>
  `;
  const button = el.querySelector("button");
  const input = el.querySelector("input");
  const list = el.querySelector("div.list");

  button.addEventListener("click", () => {
    const { value } = input;
    list.insertAdjacentHTML("beforeend", `<p>${value}</p>`);
    const p = list.querySelectorAll("p");
    if (p.length > 5) {
      p.forEach((elem, i) => {
        if (i === 0) {
          elem.remove();
        }
      });
    }

    input.value = "";
  });
}
