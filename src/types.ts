/**
 * Interface representing a user.
 */
export interface User {
  /**
   * The username of the user.
   */
  username: string;

  /**
   * The age of the user.
   */
  age: number;

  /**
   * Indicates whether the user's username is verified.
   */
  isVerified: boolean;
}

/**
 * Interface representing a bank account.
 */
export interface BankAccount {
  /**
   * The unique ID of the bank account.
   */
  id: string;

  /**
   * The balance of the bank account.
   */
  balance: number;

  /**
   * The owner of the bank account.
   */
  owner: User;
}

/**
   * Interface representing the bank system.
   */
export interface IBankSystem {
  /**
   * Creates a new bank account for a user.
   * @param {User} user - The user for whom the account is being created.
   * @returns {BankAccount | string} - The created bank account or an error message.
   */
  createAccount(user: User): BankAccount | string;

  /**
   * Deposits money into a bank account.
   * @param {string} accountId - The ID of the account.
   * @param {number} amount - The amount to be deposited.
   * @returns {string} - A success message or an error message.
   */
  depositMoney(accountId: string, amount: number): string;

  /**
   * Withdraws money from a bank account.
   * @param {string} accountId - The ID of the account.
   * @param {number} amount - The amount to be withdrawn.
   * @returns {string} - A success message or an error message.
   */
  withdrawMoney(accountId: string, amount: number): string;

  /**
   * Checks the balance of a bank account.
   * @param {string} accountId - The ID of the account.
   * @returns {string} - The current balance or an error message.
   */
  checkBalance(accountId: string): string;
}