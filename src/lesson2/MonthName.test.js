import { showMonthName } from "./MonthName";

describe("showMonthName", () => {
  it("is a function", () => {
    expect(showMonthName).toBeInstanceOf(Function);
  });
  it('return "Февраль" for prompt"2"', () => {
    console.log = jest.fn();
    jest.spyOn(window, "prompt").mockImplementation(() => "2");
    showMonthName();
    expect(console.log.mock.calls[0][0]).toBe("Февраль");
  });
});
