//1. Calcule o MDC (máximo divisor comum) entre dois números.
const mdc = (a, b) => {

    if (b === 0) {
        return a
    } else {
        return mdc(b, a % b);
    }
}

console.log(mdc(20, 15));