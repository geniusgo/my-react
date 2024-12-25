export const camelCaseToKebabCase = (str: string) => {
  return str
    .split('')
    .map((char) => {
      return char === char.toLowerCase() ? char : '-' + char.toLowerCase();
    })
    .join('');
};
