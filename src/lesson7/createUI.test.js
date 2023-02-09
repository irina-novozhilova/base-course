import { createUI } from "./createUI";

describe("crateUI", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    createUI(el);
  });

  it("create basic markup", () => {
    expect(el.querySelectorAll("p").length).toBe(3);
    expect(el.querySelector("button")).toBeTruthy();
    expect(el.querySelector("input")).toBeTruthy();
  });

  it("button hidden if input have no value", () => {
    el.querySelector("button").hidden =
      el.querySelector("input").value.length === 0;
    expect(el.querySelector("button").hidden).toBeTruthy();
  });

  it("add new paragraph with input value on button click", () => {
    el.querySelector("input").value = "dog";
    el.querySelector("button").click();

    expect(el.querySelector("input").value).toBe("");
    expect(el.querySelectorAll("div.list p").length).toBe(4);
    expect(el.querySelectorAll("div.list p")[3].innerHTML).toBe("dog");
  });

  it("if list have more than 5 paragraphs - delete first paragraph", () => {
    el.querySelector("input").value = "dog";
    el.querySelector("button").click();
    el.querySelector("input").value = "cat";
    el.querySelector("button").click();
    el.querySelector("input").value = "horse";
    el.querySelector("button").click();

    expect(el.querySelectorAll("div.list p").length).toBe(5);
    expect(el.querySelectorAll("div.list p")[0].innerHTML).toBe(
      "Это второй текстовый параграф"
    );
  });
});
