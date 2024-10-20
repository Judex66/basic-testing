// Uncomment the code below and write your tests
import { simpleCalculator, Action } from '01-simple-tests';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const a = 7;
    const b = 4;
    const res = 11;
    expect(simpleCalculator({ a, b, action: Action.Add })).toStrictEqual(res);
  });

  test('should subtract two numbers', () => {
    const a = 7;
    const b = 4;
    const res = 3;
    expect(simpleCalculator({ a, b, action: Action.Subtract })).toStrictEqual(
      res,
    );
  });

  test('should multiply two numbers', () => {
    const a = 7;
    const b = 4;
    const res = 28;
    expect(simpleCalculator({ a, b, action: Action.Multiply })).toStrictEqual(
      res,
    );
  });

  test('should divide two numbers', () => {
    const a = 12;
    const b = 4;
    const res = 3;
    expect(simpleCalculator({ a, b, action: Action.Divide })).toStrictEqual(
      res,
    );
  });

  test('should exponentiate two numbers', () => {
    const a = 4;
    const b = 2;
    const res = 16;
    expect(
      simpleCalculator({ a, b, action: Action.Exponentiate }),
    ).toStrictEqual(res);
  });

  test('should return null for invalid action', () => {
    const a = 7;
    const b = 4;
    const invalidAction = 'what';
    expect(simpleCalculator({ a, b, action: invalidAction })).toBeNull;
  });

  test('should return null for invalid arguments', () => {
    const a = 'what1';
    const b = 'who1';
    expect(simpleCalculator({ a, b, action: Action.Add })).toBeNull;
  });
});
