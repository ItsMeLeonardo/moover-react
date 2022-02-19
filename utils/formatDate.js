/**
 * @description Formats a date object to a string
 * @param {Date} date - date to format
 * @param {String} lang - language to format
 * @returns
 */
export const formatDate = (date = new Date(), lang = "en-US") => {
  const intlDate = new Intl.DateTimeFormat(lang);
  return intlDate.format(date);
};
