import { showDigitsSum } from "./DigitsSum";

describe("showDigitsSum", () => {
  it("is a function", () => {
    expect(showDigitsSum).toBeInstanceOf(Function);
  });
  it('return "6" for prompt "123"', () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "123");
    console.log = jest.fn();
    showDigitsSum();
    expect(console.log.mock.calls[0][0]).toBe(6);
  });
});
