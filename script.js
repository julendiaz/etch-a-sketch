"use strict";

const gridContainer = document.querySelector("#grid-container");
const btnClear = document.querySelector("#btn-clear");
const btnRainbow = document.querySelector("#btn-rainbow");
const btnBrush = document.querySelector("#btn-brush");
const btnEraser = document.querySelector("#btn-eraser");
const eachSquare = document.querySelectorAll(".square");
const allBtns = document.querySelectorAll(".btn");

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

let promptMessage = function (text) {
    let newPixelSize = parseInt(window.prompt(text, ""));
    if(text == '' ){
        text = "Please enter a number from 3 to 81";   
    } else if (newPixelSize <= 81 && newPixelSize >= 3) {
        pixelSize = newPixelSize;
    } else if (isNaN(newPixelSize)) {
        promptMessage("That's not a number my friend. Please enter a digit from 3 to 81", "");
    } else {
        promptMessage("Oops! Your number (" + newPixelSize + ") is not between 3 and 81", "");
    }
}


// Clear Canvas
btnClear.addEventListener("click", function() {
    eachSquare.forEach( function (element) {
        element.style.backgroundColor = "white";
    })
    promptMessage("Please enter a new Canvas size");
    gridContainer.style.gridTemplateColumns = `repeat(${pixelSize}, 1fr)`;
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
      }
    fillCanvas(pixelSize);
})

// Hovering effects for brush buttons (Need to clean up)
allBtns.forEach(button => {
    button.addEventListener("mouseenter", function (e) {
        if (button.classList.contains("selected")) {
            button.style.backgroundColor = "#333d4d";
        } else {
            e.target.style.backgroundColor = "#3e495a";
        }
    })
    button.addEventListener("mouseleave", function (e){
        if (button.classList.contains("selected")) {
            button.style.backgroundColor = "#333d4d";
        } else {
            e.target.style.backgroundColor = "#505d72";
        }
    })
})

btnRainbow.addEventListener("click", function () {
    rainbow = true;
    btnRainbow.classList.add("selected");
    btnBrush.classList.remove("selected");
    btnEraser.classList.remove("selected");
    btnBrush.style.backgroundColor = "#505d72";
    btnEraser.style.backgroundColor = "#505d72";
})

btnBrush.addEventListener("click", function () {
    rainbow = false;
    eraser = false;
    btnBrush.classList.add("selected");
    btnRainbow.classList.remove("selected");
    btnEraser.classList.remove("selected");
    btnRainbow.style.backgroundColor = "#505d72";
    btnEraser.style.backgroundColor = "#505d72";
})

btnEraser.addEventListener("click", function () {
    rainbow = false;
    eraser = true;
    btnEraser.classList.add("selected");
    btnBrush.classList.remove("selected");
    btnRainbow.classList.remove("selected");
    btnBrush.style.backgroundColor = "#505d72";
    btnRainbow.style.backgroundColor = "#505d72";
})
