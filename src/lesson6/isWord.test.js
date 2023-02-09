import { isWord } from "./isWord";

describe("isWord", () => {
  it("is a function", () => {
    expect(isWord).toBeInstanceOf(Function);
  });
  it("return true for isWord('dog')", () => {
    expect(isWord("dog")).toBeTruthy();
  });
  it("return false for isWord('dog is not a cat')", () => {
    expect(isWord("dog is not a cat")).toBeFalsy();
  });
});
