import { getBanglaNumber } from "../src/index";

describe("GetBanglaNumber", () => {
  it("should get bangla number when passes english number", () => {
    expect(getBanglaNumber(1287125)).toBe("১২৮৭১২৫");
  });
  it("should get bangla number when passes english number as string", () => {
    expect(getBanglaNumber("1287125")).toBe("১২৮৭১২৫");
  });
  it("should throw an error when passes non-digit values in string", () => {
    expect(() => getBanglaNumber("1234e54")).toThrow();
  });
});
