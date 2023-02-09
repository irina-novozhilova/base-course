import { whatKindOfString } from "./whatKindOfString";

describe("whatKindOfString", () => {
  it("is a function", () => {
    expect(whatKindOfString).toBeInstanceOf(Function);
  });
  it('return "It is date" for prompt "12.03.2020"', () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "12.03.2020");
    console.log = jest.fn();
    expect(whatKindOfString()).toBe("It is date");
  });
  it('return "It is email" for prompt "mail@mail.ru"', () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "mail@mail.ru");
    console.log = jest.fn();
    expect(whatKindOfString()).toBe("It is email");
  });
  it('return "It is phone" for prompt "+78764562222"', () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "+78764562222");
    console.log = jest.fn();
    expect(whatKindOfString()).toBe("It is phone");
  });
});
