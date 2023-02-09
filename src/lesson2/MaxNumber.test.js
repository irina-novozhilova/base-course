import { showMaxNumber } from "./MaxNumber";

describe("showMaxNumber", () => {
  it("is a function", () => {
    expect(showMaxNumber).toBeInstanceOf(Function);
  });
  it('return "6" for showMultiplySumNumber(5,6)', () => {
    console.log = jest.fn();
    showMaxNumber(5, 6);
    expect(console.log.mock.calls[0][0]).toBe(6);
  });
  it('return "числа равны" for showMultiplySumNumber(5,5)', () => {
    console.log = jest.fn();
    showMaxNumber(5, 5);
    expect(console.log.mock.calls[0][0]).toBe("Числа равны");
  });
});
