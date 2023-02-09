import { showLengthAndSquare } from "./LengthAndSquare";

describe("showLengthAndSquare", () => {
  it("is a function", () => {
    expect(showLengthAndSquare).toBeInstanceOf(Function);
  });

  it("shows 31 and 78 for R=5 ", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "5");
    console.log = jest.fn();
    showLengthAndSquare();
    expect(console.log.mock.calls[0][0]).toBe(31);
    expect(console.log.mock.calls[0][1]).toBe(78);
  });
});
