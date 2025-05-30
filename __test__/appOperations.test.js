const appOperations = require('../src/appOperations');

test('multiply property of zero', () => {
    expect(appOperations(5,0)).toBe(0);
});