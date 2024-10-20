// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 7, b: 4, action: Action.Subtract, expected: 3 },
  { a: 1, b: 2, action: Action.Multiply, expected: 2 },
  { a: 2, b: 4, action: Action.Multiply, expected: 8 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 4, b: 2, action: Action.Divide, expected: 2 },
  { a: 2, b: 2, action: Action.Divide, expected: 1 },
  { a: 18, b: 9, action: Action.Divide, expected: 2 },
  { a: 1, b: 2, action: Action.Exponentiate, expected: 1 },
  { a: 4, b: 8, action: Action.Exponentiate, expected: 65536 },
  { a: 3, b: 12, action: Action.Exponentiate, expected: 531441 },
  // continue cases for other actions
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test('should blah-blah', () => {
    expect(true).toBe(true);
  });
  it.each(testCases)('should work', ({ a, b, action, expected }) => {
    expect(simpleCalculator({ a, b, action })).toStrictEqual(expected);
  });
  // Consider to use Jest table tests API to test all cases above
});
