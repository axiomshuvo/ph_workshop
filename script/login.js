console.log("login functionlatyu");

document.getElementById("login-btn").addEventListener("click", () => {
  console.log("login btn clicked");

  //   get contact number
  const inputNumber = document.getElementById("input-number");
  const contactNumber = inputNumber.value;
  console.log(contactNumber);

  /// get Pin value
  const inputPin = document.getElementById("input-pin");
  const pinNumber = inputPin.value;
  console.log(pinNumber);

  //   match the number and pin

  if (contactNumber === "0123456789" && pinNumber === "1234") {
    alert("Login Successfully");
    //     window.location.replace("/home.html");
    window.location.assign("/home.html");
  } else {
    alert("login Failed");
    return;
  }
});
