const appOperations = require('../src/appOperations');

test('multiply property of zero', () => {
    expect(appOperations.multiply(5,0)).toBe(0);
});

test("adding two values", () => {
    expect(appOperations.add(5, 3)).toBe(8);
});

test("subtracting two values", () => {
    expect(appOperations.subtract(10, 4)).toBe(6);
});

test("dividing two values", () => {
    expect(appOperations.divide(20, 4)).toBe(5);
});
test("dividing by zero throws error", () => {
    expect(() => appOperations.divide(10, 0)).toThrow("Cannot divide by zero");
});

