let paragraphElement = document.getElementById('text');

function changeText(){
    console.log("Button clicked!");
    paragraphElement.textContent = "This is the updated text after clicking the button.";
    paragraphElement.style.color = "blue";
    paragraphElement.style.backgroundColor = "lightgray";
}