import concat from "./concat";

test("array, 2, [3], [[4]]", () => {
  var array = [1];
  expect(concat(array, 2, [3], [[4]])).toStrictEqual([1, 2, 3, [4]]);
});

test("array, null, undefined, false, '', 0", () => {
  var array = [1];
  expect(concat(array, null, undefined, false, "", 0)).toStrictEqual([
    1,
    null,
    undefined,
    false,
    "",
    0,
  ]);
});
