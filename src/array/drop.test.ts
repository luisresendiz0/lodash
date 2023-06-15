import lodash from "lodash";
import drop from "./drop";

test("test 1", () => {
  let expected = lodash.drop([1, 2]);
  expect(drop([1, 2])).toStrictEqual(expected);
});

test("test 2", () => {
  let expected = lodash.drop([]);
  expect(drop([])).toStrictEqual(expected);
});

test("test 3", () => {
  let expected = lodash.drop([1], 2);
  expect(drop([1], 2)).toStrictEqual(expected);
});

test("test 4", () => {
  let expected = lodash.drop([1], 1);
  expect(drop([1], 1)).toStrictEqual(expected);
});

test("test 4", () => {
  let expected = lodash.drop([1, 2, 3, 4, 5], 4);
  expect(drop([1, 2, 3, 4, 5], 4)).toStrictEqual(expected);
});
