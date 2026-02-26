console.log("cashout functionality loaded successfully");

document.getElementById("cashout-btn").addEventListener("click", () => {
  console.log("cashout btn clicked");
  // get the agent Number & validate

  const cashoutNumberInput = document.getElementById("cashout-number");
  const cashoutNumber = cashoutNumberInput.value;
  console.log(cashoutNumber);

  if (cashoutNumber.length != 11) {
    alert("Invalid Agent Number");
    return;
  }

  // get the amount, validate , covert to number
  const cashoutAmountInput = document.getElementById("cashout-amount");
  const cashoutAmount = cashoutAmountInput.value;
  console.log(cashoutAmount);

  // get the current balance, validate, convert to number

  const currentBalanceInput = document.getElementById("balance");
  const currentBalance = currentBalanceInput.innerText;
  console.log(currentBalance);

  // Calculate the new balance
  const newBalance = Number(currentBalance) - Number(cashoutAmount);

  if (newBalance < 0) {
    alert("Insufficient Balance");
    return;
  }
  console.log(newBalance);

  // get the pin, verify the pin
  const cashoutPinInput = document.getElementById("cashout-pin");
  const cashoutPin = cashoutPinInput.value;
  console.log(cashoutPin);
  if (cashoutPin == "1234") {
    // update the balance
    currentBalanceInput.innerText = newBalance;
    alert("Cashout successful!");
  } else {
    alert("Invalid Pin");
    return;
  }

  // if all the validation is passed, then update the balance and show the success message
  // else show the error message
});
