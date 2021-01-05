const sum = require('./sum');

// toBe()
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum plus sum is four', () => {
  expect(2 + 2).toBe(4);
});

// toEqual()
test('object assigment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// not.toBe()
test('adding positive number is not zero', () => {
  for (let a = 0; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// toBeNull, toBeUndefined, toBeDefined, toBeTruthy, toBeFalsy
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  // expect(n).toBeUndefined();
  // expect(n).toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).toBeFalsy();
  expect(z).toBeDefined();
  expect(z).toBeFalsy();
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

const shoppingList = ['milk', 'apple', 'orange', 'juice'];

test('the shoppingList has milk on it', () => {
  expect(shoppingList).toContain('milk');
});

test('the shoppingList has brod on it', () => {
  expect(new Set(shoppingList).add('brod')).toContain('brod');
});

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
