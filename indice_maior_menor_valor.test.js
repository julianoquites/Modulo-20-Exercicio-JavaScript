const { encontrarIndicesMaiorMenor } = require("./indice_maior_menor_valor");

describe("Teste do Índice com Maior e Menor Valor", () => {
  it("[20, 11, 4, 13, 41, 76, 15]", () => {
    expect(encontrarIndicesMaiorMenor([20, 11, 4, 13, 41, 76, 15])).toEqual({
      indiceMaiorValor: 5,
      indiceMenorValor: 2,
    });
  });
});
