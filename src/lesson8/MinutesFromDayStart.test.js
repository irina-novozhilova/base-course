import { getMinutesFromDayStart } from "./MinutesFromDayStart";

describe("getMinutesFromDayStart", () => {
  it("is a function", () => {
    expect(getMinutesFromDayStart).toBeInstanceOf(Function);
  });
  it("return '953' for 15:53", () => {
    jest.useFakeTimers().setSystemTime(new Date("2020-01-01 15:53:00"));
    expect(getMinutesFromDayStart()).toBe(953);
  });
});
