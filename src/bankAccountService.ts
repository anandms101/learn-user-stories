import { User, BankAccount, IBankSystem } from "./types";

/**
 * Class representing a bank system.
 */
export class BankSystem implements IBankSystem {
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
   * Deposits money into a bank account.
   * @param {string} accountId - The ID of the account.
   * @param {number} amount - The amount to be deposited.
   * @returns {string} - A success message or an error message.
   */
  depositMoney(accountId: string, amount: number): string {
    const account = this.accounts.find(acc => acc.id === accountId);
    if (!account) {
      return "Error: Invalid account";
    }
    if (amount <= 0) {
      return "Error: Invalid deposit amount";
    }
    account.balance += amount;
    return `Deposit successful. New balance: ${account.balance}`;
  }

  /**
   * Generates a unique 10-digit ID for a new bank account.
   * @returns {string} - The generated unique ID.
   */
  private generateUniqueId(): string {
    return Math.random().toString().slice(2, 12);
  }
}