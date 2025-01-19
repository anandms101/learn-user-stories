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
}

console.log("Tests completed.");