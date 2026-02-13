// KEYBOARD EVENTS - event occurs when key on the keyboard is pressed.

// 🔹 Common Keyboard Events
// keydown
// keyup

// down → press
// up   → release


// keydown event - 
let inputField = document.getElementById('input');
inputField.addEventListener('keydown', function(event) {
    console.log(`Key Down: ${event.key}`);
});

// keyup event - 
inputField.addEventListener('keyup', function(event) {
    console.log(`Key Up: ${event.key}`);
});



