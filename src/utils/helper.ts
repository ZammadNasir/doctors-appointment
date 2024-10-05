
export const current_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const numberFormatWithoutCurrency = (value: number) =>
  Intl.NumberFormat("en-AZ").format(value);

const numToWordObj = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety",
} as any;

const placement = {
  100: " Hundred",
  1000: " Thousand",
  1000000: " Million",
  1000000000000: " Trillion",
};

export const convertNumToWord = (num: any): any => {
  const limiter = (val: any) => (num < val) as any;
  const limiterIndex = Object.keys(placement).findIndex(limiter) as any;
  const limiterKey = Object.keys(placement)[limiterIndex] as any;
  const limiterVal = Object.values(placement)[limiterIndex - 1] as any;
  const limiterMod = Object.keys(placement)[limiterIndex - 1] as any;

  if (numToWordObj[num]) {
    return numToWordObj[num];
  }

  if (num < 100) {
    const whole = Math.floor(num / 10) * 10;
    const part = num % 10;
    return numToWordObj[whole] + " " + numToWordObj[part];
  }

  if (num < limiterKey) {
    const whole = Math.floor(num / limiterMod);
    const part = num % limiterMod;
    if (part === 0) {
      return convertNumToWord(whole) + limiterVal;
    }
    return (
      convertNumToWord(whole) + limiterVal + " and " + convertNumToWord(part)
    );
  }
};
export const capitalize_string = (word: string): string => {
  return word?.charAt(0)?.toUpperCase() + word?.slice(1);
};

export const set_localize_content = (obj: any, language: string) => {
  return obj?.[language];
};
