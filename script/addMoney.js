document.getElementById("add-money-btn").addEventListener("click", function () {
  console.log("add money button clicked");

  //get bank name

  const bankAccount = getValueFromInput("add-money-bank");
  console.log(bankAccount);
  if (bankAccount == "Select Bank") {
    alert("please select a bank");
    return;
  }

  // get bank account number
  const accNo = getValueFromInput("bank-acc-number");
  if (accNo.length != 11) {
    alert("invalid acc no");
    return;
  }

  // get money amount
  const amount = getValueFromInput("add-money-amount");

  const newBalance = getBalance() + Number(amount);

  console.log(newBalance);

  const pin = getValueFromInput("add-money-pin");

  if (pin == "1234") {
    alert(`Add ৳ ${amount} successfully from ${bankAccount}`);
    setBalance(newBalance);
    // get history container
    const historylist = document.getElementById("history-container");

    // create div element
    const list = document.createElement("div");
    // insert innerHtml
    list.innerHTML = `
         <div class="transaction-card p-2 bg-base-100">
         <p>
         Add ৳ ${amount} successfully from ${bankAccount} Successfully . 
         </p>
         </div>
    `;
    // append element
    historylist.appendChild(list);
  } else {
    alert("Invalid Pin");
  }
});
