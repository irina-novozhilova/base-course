import * as workWithObject from "./WorkwithObject";

describe("showWorkWithObject", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  it("is a function", () => {
    expect(workWithObject.showWorkWithObject).toBeInstanceOf(Function);
  });

  it("object destructure to separate vars 'name', 'age', 'role'", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => 22);
    workWithObject.showWorkWithObject();
    expect(console.log.mock.calls[0][0]).toBe("John");
    expect(console.log.mock.calls[0][1]).toBe(22);
    expect(console.log.mock.calls[0][2]).toBe("admin");
  });
});
