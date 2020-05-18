// Constants
const input = document.querySelectorAll('input');

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("input", function () {
        // Variables
        let red = document.getElementById("red").value,
            green = document.getElementById("green").value,
            blue = document.getElementById("blue").value;
        
        
        let valueRed = document.querySelector("#valueRed"),
            valueGreen = document.querySelector("#valueGreen"),
            valueBlue = document.querySelector("#valueBlue");
        // Atribution range to values
        valueRed.innerHTML = red ;
        red.oninput = function () {
            valueRed.innerText = this.value;
        }
        valueGreen.innerText = green;
        green.oninput = function () {
            valueGreen.innerText = this.value;
        }
        valueBlue.innerText = blue;
        blue.oninput = function () {
            valueBlue.innerText = this.value;
        }
        // Color show
        let square = document.getElementById("square");
        square.style.background = `rgb(${red}, ${green}, ${blue})`;
    });
}