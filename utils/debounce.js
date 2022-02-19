/**
 * @description Debounce a function
 * @param {Function} func - Function to debounce
 * @param {Number} wait - time in ms
 * @returns
 */
export const debounce = (func, wait) => {
  let timeout;
  return function () {
    if (timeout) clearTimeout(timeout);
    const args = arguments;

    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};
