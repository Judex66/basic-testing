// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const val = 'value';
    await expect(resolveValue(val)).resolves.toStrictEqual(val);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const val = 'value!';
    expect(() => throwError(val)).toThrow(val);
  });

  test('should throw error with default message if message is not provided', () => {
    const val = 'Oops!';
    expect(() => throwError()).toThrow(val);
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
  });
});
