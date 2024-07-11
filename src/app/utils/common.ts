export const lang: LangArrType = [
  { title: "KR", lang: "kr" },
  { title: "ENG", lang: "en" },
];

export function isDateFormat(val: string) {
  var regex_date = /^\d{4}\d{1,2}\d{1,2}$/;
  // Check the pattern
  if (!regex_date.test(val)) {
    return false;
  }
  var year = val[0] + val[1] + val[2] + val[3];
  var month = val[4] + val[5];
  var day = val[6] + val[7];
  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // Check the ranges of month and year
  if (
    Number(year) < 1000 ||
    Number(year) > 3000 ||
    Number(month) == 0 ||
    Number(month) > 12
  ) {
    return false;
  }
  // Adjust for leap years
  if (
    Number(year) % 400 == 0 ||
    (Number(year) % 100 != 0 && Number(year) % 4 == 0)
  ) {
    monthLength[1] = 29;
  }
  // Check the range of the day
  return Number(day) > 0 && Number(day) <= monthLength[Number(month) - 1];
}

export function queryString(value: any) {
  let query = new URLSearchParams(value).toString();
  return `?${query}`;
}
