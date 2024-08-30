const { somaMultiplosDe5ou7 } = require("./soma_multiplos");

describe("Soma de Multiplos de 5 ou 7", () => {
it("Abaixo de 1000", () => {
        expect(somaMultiplosDe5ou7(1000)).toBe(156361);
    });
})