"use strict";

// Select the grid-container with DOM
const gridContainer = document.querySelector("#grid-container");
// Select eachSquare with classSelectorAll

// select clear button
const btnClear = document.querySelector("#btn-clear");
// Create a variable for pixelSize and assign it a value
let pixelSize = 30;
// Create newSquare function for creating each square and append it to grid container
let newSquare = function () {
//     Create each square with createElement
    const singleSquare = document.createElement("div");
    //     Assign it the class eachSquare
    singleSquare.classList.add("square");
    singleSquare.style.backgroundColor = "white";
    singleSquare.style.border = "0.03em solid black";
    // Add event listener
    singleSquare.addEventListener("mouseover", function () {
        singleSquare.style.backgroundColor = "black";
    })
    //     Append this newSquare to grid-container
    gridContainer.appendChild(singleSquare);
}


// Function for fillCanvas
let fillCanvas = function (pixelSize) {
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
//     Create an empty array for storing the three values
//     Create a for loop until 3 values
//         Create an equation for random values between 0 and 255
//         Push each random value to the array
//     return the array