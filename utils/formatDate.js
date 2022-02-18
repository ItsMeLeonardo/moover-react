export const formatDate = (date = new Date(), lang = "en-US") => {
  const intlDate = new Intl.DateTimeFormat(lang);
  return intlDate.format(date);
};
