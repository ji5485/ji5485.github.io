function dateFormat(date: string): string {
  const dateArr: number[] = date.split('-').reduce((acc: number[], cur: string) => {
    acc.push(parseInt(cur));
    return acc;
  }, []);

  return `${dateArr[0]}년 ${dateArr[1]}월 ${dateArr[2]}일`;
}

export default dateFormat;
