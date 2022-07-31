let balance = 1000;

function debit(amount, description) {
    //these lines of code display information to the user in the style of a receipt
    console.log("**********************************");
    console.log(`Your opening balance is £${balance}`);
    console.log(`you purchased ${description} for £${amount}`);
    // this is the actual logic behind this function
    balance = balance - amount;
    // this displays again the balance to reflect the change
    console.log(`Your new balance is £${balance}`);
    console.log("**********************************");

    return balance;
}

debit(10, "food");

function credit(amount, description) {
  //these lines of code display information to the user in the style of a receipt
  console.log("**********************************");
  console.log(`Your opening balance is £${balance}`);
  console.log(`you received £${amount} for ${description}`);
  // this is the actual logic behind this function
  balance = balance + amount;
  // this displays again the balance to reflect the change
  console.log(`Your new balance is £${balance}`);
  console.log("**********************************");

  return balance;
}

// credit(50, "birthday");
