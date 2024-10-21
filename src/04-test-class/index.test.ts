// Uncomment the code below and write your tests
import {
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
} from '.';

describe('account', () => {
  test('should create account with initial balance', () => {
    const account = getBankAccount(1000);
    expect(account.getBalance()).toStrictEqual(1000);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const account = getBankAccount(1000);
    expect(() => account.withdraw(1001)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const fromAccount = getBankAccount(1000);
    const toAccount = getBankAccount(1000);
    expect(() => fromAccount.transfer(1010, toAccount)).toThrowError();
  });

  test('should throw error when transferring to the same account', () => {
    const fromAccount = getBankAccount(1000);
    expect(() => fromAccount.transfer(100, fromAccount)).toThrowError();
  });

  test('should deposit money', () => {
    const account = getBankAccount(1000);
    expect(account.deposit(1000).getBalance()).toStrictEqual(2000);
  });

  test('should withdraw money', () => {
    const account = getBankAccount(1000);
    expect(account.withdraw(100).getBalance()).toStrictEqual(900);
  });

  test('should transfer money', () => {
    const fromAccount = getBankAccount(10000);
    const toAccount = getBankAccount(1000);
    fromAccount.transfer(5000, toAccount);
    expect(fromAccount.getBalance()).toStrictEqual(5000);
    expect(toAccount.getBalance()).toStrictEqual(6000);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const account = getBankAccount(1000);
    const balance = await account.fetchBalance();
    expect(balance === null || typeof balance === 'number').toBeTruthy();
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const account = getBankAccount(1000);
    const newBalance = 100;
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(newBalance);
    await account.synchronizeBalance();
    expect(account.getBalance()).toStrictEqual(newBalance);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const account = getBankAccount(1000);
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(null);
    await expect(account.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
