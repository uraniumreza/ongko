interface NumberMap {
  [index: string]: string;
}

const banglaToEnglish: NumberMap = {
  '০': '0',
  '১': '1',
  '২': '2',
  '৩': '3',
  '৪': '4',
  '৫': '5',
  '৬': '6',
  '৭': '7',
  '৮': '8',
  '৯': '9',
};

const getEnglishNumber = (banglaNumber: string) => {
  return banglaNumber.replace(
    /\d/g,
    (matched: string): string => banglaToEnglish[matched],
  );
};

export default getEnglishNumber;
