import { solveSquareRoot } from "./SquareRoot";

describe("showLengthAndSquare", () => {
  it("is a function", () => {
    expect(solveSquareRoot).toBeInstanceOf(Function);
  });
  it("has roots 2 and 3 for 1,-5,6", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "1, -5, 6");
    const roots = solveSquareRoot();
    const solve = [2, 3];
    expect(solve.indexOf(roots.x1) !== -1).toBeTruthy();
    expect(solve.indexOf(roots.x2) !== -1).toBeTruthy();
  });

  it("has one root 2.5 for 4, -20, 25", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "4, -20, 25");
    const roots = solveSquareRoot();
    const solve = [2.5];
    expect(solve.indexOf(roots.x1) !== -1).toBeTruthy();
    expect(roots.x2).toBeUndefined();
  });

  it("has no roots for 5, 2, 3", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "5, 2, 3");
    expect(solveSquareRoot()).toBeUndefined();
  });
});
