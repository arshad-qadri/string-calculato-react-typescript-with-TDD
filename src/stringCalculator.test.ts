import sum from "./sum";


test("Test case for empty string", () => {
  expect(sum("")).toBe(0);
})

test("Test case for single number string", () => {
    expect(sum("1")).toBe(1);
  });