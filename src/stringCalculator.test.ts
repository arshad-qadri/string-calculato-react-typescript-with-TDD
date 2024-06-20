import sum from "./sum";

test("Test case for empty string", () => {
  expect(sum("")).toBe(0);
});

test("Test case for single number string", () => {
  expect(sum("1")).toBe(1);
});

test("Test case for comma separated string", () => {
  expect(sum("1,5")).toBe(6);
});

test("Test case for \\n and commas", () => {
  expect(sum("1\n2,3")).toBe(6);
});

test("Test case for custom delimiter ;", () => {
  expect(sum("//;\n1;2")).toBe(3);
});

test("Test case for negative numbers", () => {
    expect(() => sum("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
  });
