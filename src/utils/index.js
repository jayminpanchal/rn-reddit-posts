export const toQueryString = obj =>
  '?'.concat(
    Object.keys(obj)
      .map(e => `${encodeURIComponent(e)}=${encodeURIComponent(obj[e])}`)
      .join('&'),
  );
