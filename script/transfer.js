document.getElementById("transfer-btn").addEventListener("click", () => {
  const accNumber = getValueFromInput("transfer-account");
  if (accNumber.length != 11) {
    alert("invalid acc no");
    return;
  }
  const amount = Number(getValueFromInput("transfer-amount"));

  const remainBal = getBalance() - amount;

  if (isNaN(remainBal) || remainBal <= 0) {
    alert("Invalid Cashout Amount");
    return;
  }
  if (amount > remainBal) {
    alert("Insufficient Balance");
    return;
  }

  const pin = getValueFromInput("transfer-pin");

  if (pin == "1234") {
    alert(`Transfer ৳ ${amount} Successfully To ${accNumber}`);
    setBalance(remainBal);
    // get history container
    const historylist = document.getElementById("history-container");

    // create div element
    const list = document.createElement("div");
    // insert innerHtml
    list.innerHTML = `
         <div class="transaction-card p-2 bg-base-100">
         <p>
         Transfer ৳ ${amount}To ${accNumber} Successfully . 
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
