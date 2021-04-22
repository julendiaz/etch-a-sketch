"use strict";

// Select the grid-container with DOM
const gridContainer = document.querySelector("#grid-container");
// select clear button
const btnClear = document.querySelector("#btn-clear");
const btnRainbow = document.querySelector("#btn-rainbow");
const btnBrush = document.querySelector("#btn-brush");
const btnEraser = document.querySelector("#btn-eraser");
// Create a variable for pixelSize and assign it a value
let pixelSize = 30;
let brushColor = "black";
let rainbow = false;
let eraser = false;

let randomRainbow = function () {
    //     Create an empty array for storing the three values
    let rainbowArr = [];
    //     Create a for loop until 3 values
    for (let i = 0; i < 3; i++) {
        //         Create an equation for random values between 0 and 255
        rainbowArr.push(Math.floor(Math.random() * 256));
    }
    return `rgb(${rainbowArr[0]}, ${rainbowArr[1]}, ${rainbowArr[2]})`
}

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

// Create newSquare function for creating each square and append it to grid container
let newSquare = function () {
//     Create each square with createElement
    const singleSquare = document.createElement("div");
    //     Assign it the class eachSquare
    singleSquare.classList.add("square");
    singleSquare.style.backgroundColor = "white";
    // singleSquare.style.border = "0.03em solid black";
    // Add event listener
    singleSquare.addEventListener("mouseover", function () {
        if(rainbow) {
            singleSquare.style.backgroundColor = randomRainbow();
        } else if (eraser) {
            singleSquare.style.backgroundColor = "white";
        } else {
            singleSquare.style.backgroundColor = brushColor;
        }
    })
    //     Append this newSquare to grid-container
    gridContainer.appendChild(singleSquare);
}
// Function for fillCanvas
let fillCanvas = (pixelSize) => {
    //  Create loop for inserting eachSquare until pixel size(pixelSize value * pixelSize value)
    for (let i = 0; i < (Math.pow(pixelSize, 2)); i++) {
        //   Invoke newSquare function
        newSquare();
    }
}
fillCanvas(30);


const eachSquare = document.querySelectorAll(".square");
//     Add an event listener for clear button
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

// Create a function for rainbow colors
let rainbowColors = function () {
    
}
console.log(rainbowColors());
