const compact = (arr: Array<any>) => {
  return arr.filter((el) => {
    if (el) return true;
    return false;
  });
};

export default compact;
