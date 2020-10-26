function splitOnUpper(str: string): string {
  const lowerCaseArr: string[] = str
    .split(/(?=[A-Z])/)
    .reduce((acc: string[], cur: string): string[] => {
      acc.push(cur.toLowerCase());
      return acc;
    }, []);

  return lowerCaseArr.join('-');
}

export default splitOnUpper;
