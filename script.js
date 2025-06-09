const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const includeChars = document.getElementById("includeChars");
const includeNumbers = document.getElementById("includeNumbers");

// Update length display
lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
  generatePassword();
});

// Checkbox listeners
includeChars.addEventListener("change", generatePassword);
includeNumbers.addEventListener("change", generatePassword);

// Generate password on load
window.addEventListener("load", generatePassword);

function generatePassword() {
  const length = parseInt(lengthSlider.value);
  const useChars = includeChars.checked;
  const useNumbers = includeNumbers.checked;

  let characters = "";
  if (useChars) characters += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (useNumbers) characters += "0123456789";

  if (characters.length === 0) {
    passwordInput.value = "Please select at least one option.";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * characters.length);
    password += characters[randIndex];
  }

  passwordInput.value = password;
}

function copyPassword() {
  passwordInput.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
