import { User, BankAccount } from "./types";

/**
 * Class representing a bank system.
 */
export class BankSystem {
  private accounts: BankAccount[] = [];

  /**
   * Creates a new bank account for a user.
   * @param {User} user - The user for whom the account is being created.
   * @returns {BankAccount | string} - The created bank account or an error message.
   */
  createAccount(user: User): BankAccount | string {
    if (!user.isVerified) {
      return "Error: Username is not verified";
    }
    if (user.age < 18) {
      return "Error: User is under 18";
    }

    const accountId = this.generateUniqueId();
    const newAccount: BankAccount = {
      id: accountId,
      balance: 0,
      owner: user,
    };

    this.accounts.push(newAccount);
    return newAccount;
  }

  /**
   * Generates a unique 10-digit ID for a new bank account.
   * @returns {string} - The generated unique ID.
   */
  private generateUniqueId(): string {
    return Math.random().toString().slice(2, 12);
  }
}