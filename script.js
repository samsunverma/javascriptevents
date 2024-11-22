// Mouse Events
const hoverButton = document.getElementById("hover-button");
const hoverMessage = document.getElementById("hover-message");

hoverButton.addEventListener("mouseover", () => {
  hoverMessage.textContent = "You're hovering over the button!";
});

hoverButton.addEventListener("mouseleave", () => {
  hoverMessage.textContent = "You left the button!";
});


