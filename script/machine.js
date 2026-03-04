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

// active tab

document.querySelector(".buttons").addEventListener("click", (event) => {
  const actvieBtn = event.target.closest("button");
  if (!actvieBtn) return;

  // console.log(actvieBtn);
  // remove all btn-outline
  document.querySelectorAll(".buttons button").forEach((btn) => {
    btn.classList.remove("btn-outline");
    btn.classList.add("btn-soft");
  });
  // active btn
  actvieBtn.classList.remove("btn-soft");
  actvieBtn.classList.add("btn-outline");

  const activeSection = actvieBtn.dataset.section;
  // console.log(activeSection);

  const sections = document
    .querySelectorAll("section[id]")
    .forEach((section) => {
      if (section.id === activeSection) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });
  console.log(sections);
});
