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
