function addButton() {
    // Create a new button element
    var btn = document.createElement("button");
    // Set the button text
    btn.innerHTML = "Click Me";
    // Append the button to the body of the document
    document.body.appendChild(btn);
}
// Add the button when the page loads
window.onload = addButton;