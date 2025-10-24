const { add, subtract, multiply, divide, modulus } = require('./calculator');

test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('multiplies two numbers', () => {
    expect(multiply(2, 4)).toBe(8);
});

test('divides two numbers', () => {
    expect(divide(6, 3)).toBe(2);
});

test('throws error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});

test('modulus of two numbers', () => {
    expect(modulus(10, 3)).toBe(1);
});
