import { isNumber } from './validators';

interface NumberMap {
  [index: string]: string;
}

const englishToBangla: NumberMap = {
  0: '০',
  1: '১',
  2: '২',
  3: '৩',
  4: '৪',
  5: '৫',
  6: '৬',
  7: '৭',
  8: '৮',
  9: '৯',
};

const getBanglaNumber = (englishNumber: string | number) => {
  const englishNumberStr: string =
    typeof englishNumber === 'string'
      ? englishNumber
      : englishNumber.toString();

  if (!isNumber(englishNumberStr)) {
    throw new Error('Input should contain only digits!');
  }

  return englishNumberStr.replace(
    /\d/g,
    (matched: string): string => englishToBangla[matched],
  );
};

export default getBanglaNumber;
