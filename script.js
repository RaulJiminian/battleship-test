const battleshipEl = document.getElementById("battleship");

let offsetX, offsetY;

battleshipEl.addEventListener("mousedown", (e) => {
  // Get mouse position relative to the battleship
  offsetX = e.offsetX;
  offsetY = e.offsetY;

  // Add mousemove event listener
  document.addEventListener("mousemove", onMouseMove);

  // Stop dragging on mouseup
  document.addEventListener("mouseup", onMouseUp);
});

function onMouseMove(e) {
  // Calculate new position based on mouse movement and offsets
  const newLeft = e.clientX - offsetX;
  const newTop = e.clientY - offsetY;

  battleshipEl.style.left = `${newLeft}px`;
  battleshipEl.style.top = `${newTop}px`;
}

function onMouseUp() {
  // Remove mousemove listener after placing the battleship
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}
