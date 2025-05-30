function multiply(a, b) {
  return a * b;
}

function add(a, b) {
    const intA = parseInt(a, 10);
    const intB = parseInt(b, 10);
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

module.exports ={
    multiply,
    add,
    subtract, 
    divide
};