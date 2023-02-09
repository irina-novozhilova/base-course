import { showMultiplicationTableFor7 } from "./MultiplicationTableFor7";

describe("showMultiplicationTableFor7", () => {
  it("is a function", () => {
    expect(showMultiplicationTableFor7).toBeInstanceOf(Function);
  });
  it("function returns multiplication table for 7", () => {
    console.log = jest.fn();
    showMultiplicationTableFor7();
    expect(console.log.mock.calls[0][0]).toBe("7 * 1 = 7");
    expect(console.log.mock.calls[1][0]).toBe("7 * 2 = 14");
    expect(console.log.mock.calls[2][0]).toBe("7 * 3 = 21");
    expect(console.log.mock.calls[3][0]).toBe("7 * 4 = 28");
    expect(console.log.mock.calls[4][0]).toBe("7 * 5 = 35");
    expect(console.log.mock.calls[5][0]).toBe("7 * 6 = 42");
    expect(console.log.mock.calls[6][0]).toBe("7 * 7 = 49");
    expect(console.log.mock.calls[7][0]).toBe("7 * 8 = 56");
    expect(console.log.mock.calls[8][0]).toBe("7 * 9 = 63");
    expect(console.log.mock.calls[9][0]).toBe("7 * 10 = 70");
  });
});
