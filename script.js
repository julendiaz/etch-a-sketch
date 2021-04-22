"use strict";

const gridContainer = document.querySelector("#grid-container");
const btnClear = document.querySelector("#btn-clear");
const btnRainbow = document.querySelector("#btn-rainbow");
const btnBrush = document.querySelector("#btn-brush");
const btnEraser = document.querySelector("#btn-eraser");
const eachSquare = document.querySelectorAll(".square");

// Initial values
let pixelSize = 30;
let brushColor = "black";
let rainbow = false;
let eraser = false;

// Create a random rgb values
let randomRainbow = function () {
    let rainbowArr = [];
    for (let i = 0; i < 3; i++) {
        rainbowArr.push(Math.floor(Math.random() * 256));
    }
    return `rgb(${rainbowArr[0]}, ${rainbowArr[1]}, ${rainbowArr[2]})`
}

// Square constructor
let newSquare = function () {
    const singleSquare = document.createElement("div");
    singleSquare.classList.add("square");
    singleSquare.style.backgroundColor = "white";
    singleSquare.addEventListener("mouseover", function () {
        if (rainbow) {
            singleSquare.style.backgroundColor = randomRainbow();
        } else if (eraser) {
            singleSquare.style.backgroundColor = "white";
        } else {
            singleSquare.style.backgroundColor = brushColor;
        }
    })
    //  Append each newSquare to grid-container
    gridContainer.appendChild(singleSquare);
}

let fillCanvas = (pixelSize) => {
    //  Create loop for filling up all the canvas with squares
    for (let i = 0; i < (Math.pow(pixelSize, 2)); i++) {
        newSquare();
    }
}
fillCanvas(30);

// Event Listeners 
btnRainbow.addEventListener("click", function () {
    rainbow = true;
})

btnBrush.addEventListener("click", function () {
    rainbow = false;
    eraser = false;
})

btnEraser.addEventListener("click", function () {
    rainbow = false;
    eraser = true;
})

btnClear.addEventListener("click", function() {
    eachSquare.forEach( function (element) {
        element.style.backgroundColor = "white";
    })
    let pixelSize = prompt("Please pick a new size for the canvas");
    gridContainer.style.gridTemplateColumns = `repeat(${pixelSize}, 1fr)`;
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
      }
    fillCanvas(pixelSize);
})
