const { mdc } = require("./mdc");

describe("Teste do Máximo Divisor Comum", () => {
  it("20 e 15", () => {
    expect(mdc(20, 15)).toBe(5);
  });
});
