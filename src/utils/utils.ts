// Transform From GraphQL Default Date Format To Custom Format
export const dateFormat = (date: string): string => {
  const dateArr: number[] = date.split('-').reduce((acc: number[], cur: string) => {
    acc.push(parseInt(cur));
    return acc;
  }, []);

  return `${dateArr[0]}년 ${dateArr[1]}월 ${dateArr[2]}일`;
};

// Return Random Short Key For Iterable Component
export const shortId = (): string => Math.random().toString(36).substring(2);

// Transform From GraphQL Regex Category To URL Slug
export const splitOnUpper = (str: string): string => {
  const lowerCaseArr: string[] = str
    .split(/(?=[A-Z])/)
    .reduce((acc: string[], cur: string): string[] => {
      acc.push(cur.toLowerCase());
      return acc;
    }, []);

  return lowerCaseArr.join('-');
};
