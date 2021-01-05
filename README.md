# USING MATCHERS

1. toBe()

<code>test('two plus two is four', () => {
expect(2 + 2).toBe(4);
})</code>

2. toEqual()

<code>test('object assignment', () => {
const data = {one: 1};
data['two'] = 2;
expect(data).toEqual({one: 1, two: 2});
});</code>

3. not.toBe()

<code>test('adding positive numbers is not zero', () => {
for (let a = 1; a < 10; a++) {
for (let b = 1; b < 10; b++) {
expect(a + b).not.toBe(0);
}
}
});</code>

4. Truthines

<code>test('null', () => {
const n = null;
expect(n).toBeNull();
expect(n).toBeDefined();
expect(n).not.toBeUndefined();
expect(n).not.toBeTruthy();
expect(n).toBeFalsy();
});

test('zero', () => {
const z = 0;
expect(z).not.toBeNull();
expect(z).toBeDefined();
expect(z).not.toBeUndefined();
expect(z).not.toBeTruthy();
expect(z).toBeFalsy();
});</code>

5. Numbers

toBeGreaterThan() --> expect(value).toBeGreaterThan(3);
toBeGreaterThanOrEqual() --> expect(value).toBeGreaterThanOrEqual(3);
toBeLessThan() --> expect(value).toBeLessThan(3);
toBeLessThanOrEqual() --> expect(value).toBeLessThanOrEqual(3);

For floating point use toBeCloseTo() --> expect(value).toBeCloseTo(0.3);

5. Strings

not.toMatch() --> expect('text').not.toMatch(/I/);
toMatch() --> expect('text').toMatch(/text/);

6. Arrays and iterables

toContain() --> expect([someArray]).toContain('milk');

7. Exceptions

toThrow() --> expect(() => compileSomeCode()).toThrow('some error message');
