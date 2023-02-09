import * as operationsWithArray from "./OperationsWithArrayOfNumbers";

describe("sumOfArrayElements", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  it("is a function", () => {
    expect(operationsWithArray.sumOfArrayElements).toBeInstanceOf(Function);
  });
  it("sum numbers from initial array equals 171", () => {
    operationsWithArray.sumOfArrayElements();
    expect(console.log.mock.calls[0][0]).toBe(171);
  });
  it("find min value 4 and max 54", () => {
    operationsWithArray.sumOfArrayElements();
    expect(console.log.mock.calls[1][0]).toBe(54);
    expect(console.log.mock.calls[1][1]).toBe(4);
  });
});

describe("doubleSumOfArrayElements", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  it("is a function", () => {
    expect(operationsWithArray.doubleSumOfArrayElements).toBeInstanceOf(
      Function
    );
  });
  it("sum numbers from initial array equals 171", () => {
    const result = operationsWithArray.doubleSumOfArrayElements();
    expect(result[1]).toBe(operationsWithArray.nums[1] * 2);
    expect(result[5]).toBe(operationsWithArray.nums[5] * 2);
  });
});
