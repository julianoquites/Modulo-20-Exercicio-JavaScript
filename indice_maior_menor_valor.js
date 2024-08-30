//2. Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.
const arrayTeste = [0.12312, 1, 2, 3, 4, 5, 9.82, 6, 7, 0.12311, 9.81];

const encontrarIndicesMaiorMenor = (array) => {
  let indiceMaiorValor = 0;
  let indiceMenorValor = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMaiorValor]) {
      indiceMaiorValor = i;
    } else if (array[i] < array[indiceMenorValor]) {
      indiceMenorValor = i;
    }
  }
  return { indiceMaiorValor, indiceMenorValor };
};

console.log(encontrarIndicesMaiorMenor(arrayTeste));

module.exports = { encontrarIndicesMaiorMenor };
