import Ongko from '../index';

describe('GetBanglaNumber', () => {
  test('when passes 1287125', () => {
    expect(Ongko.getBanglaNumber(1287125)).toBe('১২৮৭১২৫');
  });
  test("when passes '1287125'", () => {
    expect(Ongko.getBanglaNumber('1287125')).toBe('১২৮৭১২৫');
  });
  test('when passes 1287.125', () => {
    expect(Ongko.getBanglaNumber(1287.125)).toBe('১২৮৭.১২৫');
  });
  test("when passes '1287.125'", () => {
    expect(Ongko.getBanglaNumber('1287.25')).toBe('১২৮৭.২৫');
  });
  test('when passes 0.125', () => {
    expect(Ongko.getBanglaNumber(0.125)).toBe('০.১২৫');
  });
  test('when passes -0.125', () => {
    expect(Ongko.getBanglaNumber(-0.125)).toBe('-০.১২৫');
  });
  test("when passes '-.125'", () => {
    expect(Ongko.getBanglaNumber('-.125')).toBe('-.১২৫');
  });
  test('when passes -5.125', () => {
    expect(Ongko.getBanglaNumber(-5.125)).toBe('-৫.১২৫');
  });
  test("when passes '12,87,125'", () => {
    expect(() => Ongko.getBanglaNumber('12,87,125')).toThrow();
  });
  test("when passes '1234e54'", () => {
    expect(() => Ongko.getBanglaNumber('1234e54')).toThrow();
  });
  test('when passes 12.34.54', () => {
    expect(() => Ongko.getBanglaNumber('12.34.54')).toThrow();
  });
});
