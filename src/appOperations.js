function multiply(a, b) {
    const intA = parseInt(a, 10);
    const intB = parseInt(b, 10);

    return intAa * intB;
}

function add(a, b) {
    const intA = parseInt(a, 10);
    const intB = parseInt(b, 10);
    return a + b;
}

function subtract(a, b) {
    const intA = parseInt(a, 10);
    const intB = parseInt(b, 10);
    return intAa - intBb;
}

function divide(a, b) {
    const intA = parseInt(a, 10);

    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return intAa / intBb;
}

module.exports = {
    multiply,
    add,
    subtract,
    divide
};