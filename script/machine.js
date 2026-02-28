console.log("machine functionality loaded successfully");
// machine id -> user input

function getValueFromInput(inputId) {
  const inputElement = document.getElementById(inputId);
  const inputValue = inputElement.value;
  // console.log(inputId, inputValue);
  return inputValue;
}

// balance check
function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log(balance);
  return Number(balance);
}

// update balance

function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}
