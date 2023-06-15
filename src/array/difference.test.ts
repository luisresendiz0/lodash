import lodash from "lodash";
import difference from "./difference";

test("test 1", () => {
  let expected = lodash.difference([1, 2], [2, 3]);
  expect(difference([1, 2], [2, 3])).toStrictEqual(expected);
});

test("test 2", () => {
  let expected = lodash.difference([1, 1, 2], [1, 2, 3]);
  expect(difference([1, 1, 2], [1, 2, 3])).toStrictEqual(expected);
});

test("test 3", () => {
  let expected = lodash.difference([1, 1, 1, 1], [1]);
  expect(difference([1, 1, 1, 1], [1])).toStrictEqual(expected);
});

test("test 4", () => {
  let expected = lodash.difference([1, 1, 1, 1], []);
  expect(difference([1, 1, 1, 1], [])).toStrictEqual(expected);
});

test("test 5", () => {
  let expected = lodash.difference([], [1]);
  expect(difference([], [1])).toStrictEqual(expected);
});
