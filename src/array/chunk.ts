const chunk = (arr: Array<any>, size: number) => {
  let result = [];
  let i = 0;
  for (i = size; i < arr.length; i += size) {
    let chunk = arr.slice(i - size, i);
    result.push(chunk);
  }
  let chunk = arr.slice(i - size, i);
  if (chunk.length > 0) {
    result.push(chunk);
  }
  return result;
};

export default chunk;
