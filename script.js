// Mouse Events
const hoverButton = document.getElementById("hover-button");
const hoverMessage = document.getElementById("hover-message");

hoverButton.addEventListener("mouseover", () => {
  hoverMessage.textContent = "You're hovering over the button!";
});

hoverButton.addEventListener("mouseleave", () => {
  hoverMessage.textContent = "You left the button!";
});

// Keyboard Events
const keyboardInput = document.getElementById("keyboard-input");
const keyboardMessage = document.getElementById("keyboard-message");

keyboardInput.addEventListener("keyup", (event) => {
  keyboardMessage.textContent = `Last key pressed: ${event.key}`;
});

// Form Events
const exampleForm = document.getElementById("example-form");
const formMessage = document.getElementById("form-message");

exampleForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Form submitted successfully!";
});

// Focus and Blur Events
const focusBlurInput = document.getElementById("focus-blur-input");
const focusBlurMessage = document.getElementById("focus-blur-message");

focusBlurInput.addEventListener("focus", () => {
  focusBlurMessage.textContent = "Input is focused!";
});

focusBlurInput.addEventListener("blur", () => {
  focusBlurMessage.textContent = "Input lost focus!";
});

// Event Delegation
const buttonGroup = document.getElementById("button-group");
const delegateMessage = document.getElementById("delegate-message");

buttonGroup.addEventListener("click", (event) => {
  if (event.target.classList.contains("delegate-btn")) {
    delegateMessage.textContent = `You clicked ${event.target.textContent}`;
  }
});
