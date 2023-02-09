import { showWhichUserIsYounger } from "./WhichUserIsYounger";

describe("showWhichUserIsYounger", () => {
  it("is a function", () => {
    expect(showWhichUserIsYounger).toBeInstanceOf(Function);
  });
  it("return 'Первый персонаж младше второго' for showWhichUserIsYounger(11.02.2002,11.01.2002)", () => {
    expect(showWhichUserIsYounger("11.02.2002", "11.01.2002")).toBe(
      "Первый персонаж младше второго"
    );
  });
  it("return 'Персонажи одинакового возраста' for showWhichUserIsYounger(11.01.2002,11.01.2002)", () => {
    expect(showWhichUserIsYounger("11.01.2002", "11.01.2002")).toBe(
      "Персонажи одинакового возраста"
    );
  });
  it("return 'Первый персонаж старше второго' for showWhichUserIsYounger(11.01.2002,11.02.2002)", () => {
    expect(showWhichUserIsYounger("11.01.2002", "11.02.2002")).toBe(
      "Первый персонаж старше второго"
    );
  });
});
