const subscriptionPage = document.querySelector(".container");
const dismissPage = document.querySelector(".dismissMessage");
const errorMessage = document.querySelector("#errorMessage");
const emailInput = document.querySelector(".emailDiv");
const subscribePage = document.querySelector(".subscriptionPage");
const dismissalPage = document.querySelector(".dismissalPage");

subscribePage.addEventListener("submit", function (event) {
  event.preventDefault();
});
dismissalPage.addEventListener("click", function (event) {
  event.preventDefault();
});

function subscribeBtn() {
  const email = document.getElementById("email").value;
  if (email.length === 0) {
    errorMessage.innerHTML = "valid email required";
    emailInput.style.borderColor = " rgb(250, 21, 21)";
    return false;
  }
  if (
    !email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)
  ) {
    errorMessage.innerHTML = "valid email required";
    emailInput.style.borderColor = " rgb(250, 21, 21)";
    return false;
  }
  errorMessage.innerHTML = "";
  subscribePage.style.display = "none";
  dismissalPage.style.display = "block";
  dismissPage.style.display = "block";
  return true;
}

function dismiss() {
  subscribePage.style.display = "block";
  dismissalPage.style.display = "none";
  dismissPage.style.display = "none";
}
