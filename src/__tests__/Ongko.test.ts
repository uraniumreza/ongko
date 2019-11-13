import Ongko from '../index';

describe('GetBanglaNumber', () => {
  it('should get bangla number when passes english number', () => {
    expect(Ongko.getBanglaNumber(1287125)).toBe('১২৮৭১২৫');
  });
  it('should get bangla number when passes english number as string', () => {
    expect(Ongko.getBanglaNumber('1287125')).toBe('১২৮৭১২৫');
  });
  it('should throw an error when passes non-digit values in string', () => {
    expect(() => Ongko.getBanglaNumber('1234e54')).toThrow();
  });
});
