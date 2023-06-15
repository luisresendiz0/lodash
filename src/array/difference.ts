const difference = (arr: Array<any>, ...params: Array<Array<any>>) => {
  let previous = [...arr];
  let toRemove: Array<any> = [];
  params.forEach((param) =>
    param.forEach((item) => {
      if (arr.includes(item)) {
        toRemove.push(item);
      }
    })
  );

  return previous.filter((item) => toRemove.includes(item) === false);
};

export default difference;
