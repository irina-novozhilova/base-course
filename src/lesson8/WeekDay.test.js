import { showWeekDay } from "./WeekDay";

describe("showWeekDay", () => {
  it("is a function", () => {
    expect(showWeekDay).toBeInstanceOf(Function);
  });
  it("return 'четверг' for showWeekDay(09.02.2023)", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "09.02.2023");
    expect(showWeekDay()).toBe("четверг");
  });
});
