const concat = (arr: Array<any>, ...params: Array<any>) => {
  let result: Array<any> = [];
  params.forEach((param) => {
    if (Array.isArray(param)) {
      result = [...result, ...param];
    } else {
      result.push(param);
    }
  });
  return [...arr, ...result];
};

export default concat;
