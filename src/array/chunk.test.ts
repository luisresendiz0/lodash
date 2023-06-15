import chunk from "./chunk";

test("['a', 'b', 'c', 'd'], 2", () => {
  expect(chunk(["a", "b", "c", "d"], 2)).toStrictEqual([
    ["a", "b"],
    ["c", "d"],
  ]);
});

test("['a', 'b', 'c', 'd'], 3", () => {
  expect(chunk(["a", "b", "c", "d"], 3)).toStrictEqual([
    ["a", "b", "c"],
    ["d"],
  ]);
});

test("[], 3", () => {
  expect(chunk([], 3)).toStrictEqual([]);
});
