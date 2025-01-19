import { BankSystem } from "../src/bankAccountService";
import { User, BankAccount } from "../src/types";

/**
 * Instance of the BankSystem class.
 */
const bankSystem = new BankSystem();

/**
 * Function to test the creation of a bank account.
 * @param {User} user - The user for whom the account is being created.
 * @param {string} expected - The expected result of the account creation.
 */
const testCreateAccount = (user: User, expected: string) => {
  const result = bankSystem.createAccount(user);
  const resultType = typeof result === "object" ? "object" : result;
  console.log(
    `Test for user ${user.username}: ${
      resultType === expected ? "Passed" : "Failed"
    }`
  );
};

/**
 * Function to test depositing money into a bank account.
 * @param {string} accountId - The ID of the account.
 * @param {number} amount - The amount to be deposited.
 * @param {string} expected - The expected result of the deposit.
 */
const testDepositMoney = (accountId: string, amount: number, expected: string) => {
  const result = bankSystem.depositMoney(accountId, amount);
  console.log(
    `Test deposit into account ${accountId}: ${
      result === expected ? "Passed" : "Failed"
    }`
  );
};

/**
 * Function to test withdrawing money from a bank account.
 * @param {string} accountId - The ID of the account.
 * @param {number} amount - The amount to be withdrawn.
 * @param {string} expected - The expected result of the withdrawal.
 */
const testWithdrawMoney = (accountId: string, amount: number, expected: string) => {
  const result = bankSystem.withdrawMoney(accountId, amount);
  console.log(
    `Test withdrawal from account ${accountId}: ${
      result === expected ? "Passed" : "Failed"
    }`
  );
};

/**
 * Function to test checking the balance of a bank account.
 * @param {string} accountId - The ID of the account.
 * @param {string} expected - The expected result of the balance check.
 */
const testCheckBalance = (accountId: string, expected: string) => {
  const result = bankSystem.checkBalance(accountId);
  console.log(
    `Test balance check for account ${accountId}: ${
      result === expected ? "Passed" : "Failed"
    }`
  );
};

/**
 * Test user who is verified and over 18.
 */
const user1: User = { username: "john_doe", age: 20, isVerified: true };

/**
 * Test user who is verified but under 18.
 */
const user2: User = { username: "jane_doe", age: 17, isVerified: true };

/**
 * Test user who is not verified but over 18.
 */
const user3: User = { username: "jack_doe", age: 19, isVerified: false };

console.log("Running tests...");

const account1 = bankSystem.createAccount(user1) as BankAccount;

testCreateAccount(user1, "object"); // Should pass
testCreateAccount(user2, "Error: User is under 18"); // Should pass
testCreateAccount(user3, "Error: Username is not verified"); // Should pass

// Test deposit money
if (typeof account1 === "object") {
  testDepositMoney(account1.id, 100, "Deposit successful. New balance: 100"); // Should pass
  testDepositMoney(account1.id, -50, "Error: Invalid deposit amount"); // Should pass
  testDepositMoney("invalid_id", 100, "Error: Invalid account"); // Should pass

  // Test withdraw money
  testWithdrawMoney(account1.id, 50, "Withdrawal successful. New balance: 50"); // Should pass
  testWithdrawMoney(account1.id, -50, "Error: Invalid withdrawal amount"); // Should pass
  testWithdrawMoney(account1.id, 200, "Error: Insufficient funds"); // Should pass
  testWithdrawMoney("invalid_id", 50, "Error: Invalid account"); // Should pass

  // Test check balance
  testCheckBalance(account1.id, "Current balance: 50"); // Should pass
  testCheckBalance("invalid_id", "Error: Invalid account"); // Should pass
}

console.log("Tests completed.");