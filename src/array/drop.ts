const drop = (arr: Array<any>, n = 1) => {
  if (n === 0 || arr.length === 0) {
    return arr;
  }

  if (arr.length <= n) {
    return [];
  }

  return arr.slice(n);
};

export default drop;
