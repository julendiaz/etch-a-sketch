"use strict";

const gridContainer = document.querySelector("#grid-container");
const btnClear = document.querySelector("#btn-clear");
const eachSquare = document.querySelectorAll(".square");
const btns = [...document.querySelectorAll(".btn")];
const icons = [...document.querySelectorAll(".icon")];
const otherColors = document.querySelector("#other-colors");
const currentColor = document.querySelector("#current-color");
const colorPicker = document.querySelector("#color-input");
const pixelRange = document.querySelector("#range");

// Initial values
let pixelSize = 30;
let brushColor = "black";
let rainbow = false;
let eraser = false;
let btnSelector = "";
let colorsArr = [
  "#222222",
  "#545454",
  "#939393",
  "#D2D2D2",
  "#FFFFFF",
  "#C34141",
  "#F46A6A",
  "#D99C41",
  "#F4BC68",
  "#FFFA78",
  "#C246ED",
  "#D484F1",
  "#3C68D9",
  "#6BB5F9",
  "#90E44E",
];

//---------- BRUSHES -----------//

let initialBrush = function () {
  btns[1].style.borderBottom = "0.3em solid #6CCCF5";
  icons[1].classList.add("selected");
  currentColor.style.backgroundColor = brushColor;
};
initialBrush();

let chooseMainBrush = function () {
  clearOtherBrushes();
  btns[1].style.borderBottom = "0.3em solid #6CCCF5";
  icons[1].classList.add("selected");
  rainbow = false;
  eraser = false;
};

let clearOtherBrushes = function () {
  for (let i = 0; i < btns.length; i++) {
    btns[i].style.borderBottom = "none";
    icons[i].classList.remove("selected");
  }
};
// ---------- MAIN FUNCTIONS ------------//

// Create a random rgb values
let randomRainbow = function () {
  // Remove the white color from the rainbow colors arr
  let rainbowColors = [...colorsArr];
  rainbowColors.splice(4, 1);
  return `${rainbowColors[Math.floor(Math.random() * rainbowColors.length)]}`;
};

// Other colors constructor
let moreColors = function () {
  for (let i = 0; i < colorsArr.length; i++) {
    const newColor = document.createElement("div");
    newColor.style.width = "2em";
    newColor.style.height = "2em";
    newColor.classList.add("picker");
    newColor.style.backgroundColor = colorsArr[i];
    otherColors.appendChild(newColor);
  }
};
moreColors();

// Select all of the pickColors
const picker = document.querySelectorAll(".picker");
// Listen for a click
picker.forEach((pick) => {
  pick.addEventListener("click", function () {
    brushColor = pick.style.backgroundColor;
    currentColor.style.backgroundColor = brushColor;
    initialBrush();
    chooseMainBrush();
  });
});

// Square constructor
let newSquare = function () {
  const singleSquare = document.createElement("div");
  singleSquare.classList.add("square");
  singleSquare.style.backgroundColor = "white";
  singleSquare.style.border = "1px solid #eeeeee53";
  // Check for the brush when the mouse is over
  singleSquare.addEventListener("mouseover", function () {
    if (rainbow) {
      singleSquare.style.backgroundColor = randomRainbow();
    } else if (eraser) {
      singleSquare.style.backgroundColor = "white";
    } else {
      singleSquare.style.backgroundColor = brushColor;
    }
  });
  //  Append each newSquare to grid-container
  gridContainer.appendChild(singleSquare);
};

let fillCanvas = (pixelSize) => {
  //  Create loop for filling up all the canvas with squares
  for (let i = 0; i < Math.pow(pixelSize, 2); i++) {
    newSquare();
  }
};
fillCanvas(30);

// ------------ EVENT LISTENERS ------------- //

// Clear Canvas
btnClear.addEventListener("click", function () {
  gridContainer.style.gridTemplateColumns = `repeat(${pixelSize}, 1fr)`;
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  fillCanvas(pixelSize);
});

// Style each brush icon

// Rainbow Brush Listener
btns[0].addEventListener("click", function () {
  rainbow = true;
  clearOtherBrushes();
  btns[0].style.borderBottom = "0.3em solid #6CCCF5";
  icons[0].classList.add("selected");
});

// Main Brush Listener
btns[1].addEventListener("click", function () {
  chooseMainBrush();
});

// Eraser Listener
btns[2].addEventListener("click", function () {
  rainbow = false;
  eraser = true;
  clearOtherBrushes();
  btns[2].style.borderBottom = "0.3em solid #6CCCF5";
  icons[2].classList.add("selected");
});

// Assign a new brush color from color palette
colorPicker.addEventListener("change", function (e) {
  currentColor.style.backgroundColor = e.target.value;
  brushColor = e.target.value;
  chooseMainBrush();
});

// Assign new pixel size from pixel range input
pixelRange.addEventListener("change", function (e) {
  pixelSize = e.target.value;
  gridContainer.style.gridTemplateColumns = `repeat(${pixelSize}, 1fr)`;
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  fillCanvas(pixelSize);
});
