let balance = 1;

function debit(amount, description) {
  //these lines of code display information to the user in the style of a receipt
  console.log("**********************************");
  console.log(`Your opening balance is £${balance}`);
if(balance <= 0) {
  console.log("I'm sorry but you do not have the funds to make this transaction");
    console.log("**********************************");
  return balance
} else if (!description) {
    console.log(`You have withdrawn £${amount}`);
  } else {
    console.log(`you purchased ${description} for £${amount}`);
  }
  // this is the actual logic behind this function
  balance = balance - amount;
  // this displays again the balance to reflect the change
  console.log(`Your new balance is £${balance}`);
  console.log("**********************************");

  return balance;
}

debit(10000000);

// function credit(amount, description) {
//   //these lines of code display information to the user in the style of a receipt
//   console.log("**********************************");
//   console.log(`Your opening balance is £${balance}`);
//   //if no description is given, the transaction is treated as a cash deposit
//   if (!description) {
//     console.log(`You have deposited £${amount}`);
//   } else {
//     console.log(`you received £${amount} for ${description}`);
//   }
//   // this is the actual logic behind this function
//   balance = balance + amount;
//   // this displays again the balance to reflect the change
//   console.log(`Your new balance is £${balance}`);
//   console.log("**********************************");

//   return balance;
// }

// function combinedTransaction(amount, description, positive = false) {
//     //by default we use transactions as debits as this is the more common type, however if set to true we can handle this transaction as a credit
//   if (positive) {
//     //calls our existing credit function with the same inputs
//     credit(amount, description);
//   } else {
//     //calls our existing debit function with the same inputs
//     debit(amount, description);
//   }
//   return balance;
// }

// //Test transactions
// combinedTransaction(12, "wine");
// combinedTransaction(5);
// combinedTransaction(23, "meal");
// combinedTransaction(12, "", true);
// combinedTransaction(250, "salary", true);
// debit(10, "food");
// debit(500);
// credit(100);
// credit(50, "gift");
// credit(88);
