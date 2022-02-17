export const debounce = (func, wait) => {
  let timeout;
  return function () {
    if (timeout) clearTimeout(timeout);
    const args = arguments;

    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};
