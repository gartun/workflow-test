const fn = require("./testing");

describe("testing name function", () => {
  it("contains the name that passed to it", () => {
    const name = "muzaffer canan";

    expect(fn(name)).not.toContain(name);
  });
});
