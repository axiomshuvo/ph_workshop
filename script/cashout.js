console.log("cashout functionality loaded successfully");

document.getElementById("cashout-btn").addEventListener("click", () => {
  const cashoutNUmber = getValueFromInput("cashout-number");

  const cashoutAmount = Number(getValueFromInput("cashout-amount"));

  const currentBalance = getBalance();
  // console.log(currentBalance);

  // calculate the new balance
  const newBalance = currentBalance - cashoutAmount;
  // console.log(newBalance);
  // console.log(typeof cashoutAmount);
  // console.log(typeof currentBalance);

  const cashoutPin = getValueFromInput("cashout-pin");

  if (cashoutNUmber.length != 11) {
    alert("Invalid Agent Number");
    return;
  }

  if (isNaN(cashoutAmount) || cashoutAmount <= 0) {
    alert("Invalid Cashout Amount");
    return;
  }
  if (cashoutAmount > currentBalance) {
    alert("Insufficient Balance");
    return;
  }

  if (cashoutPin == "1234") {
    // update the balance
    setBalance(newBalance);
    alert(`৳ ${cashoutAmount}BDT cashout successful to ${cashoutNUmber}  `);

    // get history container
    const historylist = document.getElementById("history-container");

    // create div element
    const list = document.createElement("div");
    // insert innerHtml
    list.innerHTML = `
         <div class="transaction-card p-2 bg-base-100">
         <p>
         ৳ ${cashoutAmount} cashout successful to ${cashoutNUmber}  
         </p>
         </div>
    `;
    // append element
    historylist.appendChild(list);
  } else {
    alert("Invalid Pin");
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click", () => {
//   console.log("cashout btn clicked");
//   // get the agent Number & validate

//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);

//   if (cashoutNumber.length != 11) {
//     alert("Invalid Agent Number");
//     return;
//   }

//   // get the amount, validate , covert to number
//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = Number(cashoutAmountInput.value);
//   console.log(cashoutAmount);

//   // get the current balance, validate, convert to number

//   const currentBalanceInput = document.getElementById("balance");
//   const currentBalance = Number(currentBalanceInput.innerText);
//   console.log(currentBalance);

//   console.log(typeof cashoutAmount);
//   console.log(typeof currentBalance);

//   if (isNaN(cashoutAmount) || cashoutAmount <= 0) {
//     alert("Invalid Cashout Amount");
//     return;
//   }
//   if (cashoutAmount > currentBalance) {
//     alert("Insufficient Balance");
//     return;
//   }

//   // Calculate the new balance
//   const newBalance = Number(currentBalance) - Number(cashoutAmount);
//   console.log(newBalance);

//   // get the pin, verify the pin
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const cashoutPin = cashoutPinInput.value;
//   console.log(cashoutPin);
//   if (cashoutPin == "1234") {
//     // update the balance
//     currentBalanceInput.innerText = newBalance;
//     alert("Cashout successful!");
//   } else {
//     alert("Invalid Pin");
//     return;
//   }

//   // if all the validation is passed, then update the balance and show the success message
//   // else show the error message
// });
