const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  it("return an array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);
    expect(Array.isArray(shuffledArray)).toBe(true);
  });

  it("return an array of the same length as the input", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);
    expect(shuffledArray.length).toBe(inputArray.length);
  });
});
