const appOperations = require('../src/appOperations');

test('multiply property of zero', () => {
    expect(appOperations.multiply(5,0)).toBe(0);
});

test("adding two values", () => {
    expect(appOperations.add(5, 3)).toBe(8);
});