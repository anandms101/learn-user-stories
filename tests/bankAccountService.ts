import { BankSystem } from "../src/bankAccountService";
import { User } from "../src/types";

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

testCreateAccount(user1, "object"); // Should pass
testCreateAccount(user2, "Error: User is under 18"); // Should pass
testCreateAccount(user3, "Error: Username is not verified"); // Should pass

console.log("Tests completed.");