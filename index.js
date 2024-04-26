const emailErrorLabelEl = document.getElementsByClassName("form-input__label--error")[0];
const emailEl = document.getElementById("email");


// Error and Validation States
let emailIsError;
let emailValidationTimeout;

/**
 * Validation Logic
 */
function triggerEmailInputError(value) {
  if (value) {
    emailEl.style.borderColor = "black";
    emailEl.style.borderWidth = "1px";
    emailErrorLabelEl.style.display = "none";
  } else {
    emailEl.style.borderColor = "red";
    emailEl.style.borderWidth = "2px";
    emailErrorLabelEl.style.display = "block";
  }
}
function emailValidationInput() {
  var email = emailEl.value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  emailIsError = emailPattern.test(email)
  triggerEmailInputError(emailIsError)
}


// Submit
const emailFormEl = document.getElementById("email-form");
emailFormEl.addEventListener("submit", onSubmit);

const signupCardEl = document.getElementsByClassName("sign-up")[0]
const successMessageCardEl = document.getElementsByClassName("success-message")[0]

function onSubmit(evt) {
  // Prevent reload
  evt.preventDefault();

  // Make sure all the validation is true
  if (emailIsError === false || emailEl.value === "") {
    triggerEmailInputError(false)
    return
  }

  // Trigger Success
  signupCardEl.style.display = "none";
  successMessageCardEl.style.display = "block";
}

// Successful Submit
