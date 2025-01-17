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