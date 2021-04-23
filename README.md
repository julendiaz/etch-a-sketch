# Etch-a-Sketch | The Odin Project

![Frame 1portadagithub](images/gitportada.png)

Go to the [Live Preview](https://shifujulen.github.io/etch-a-sketch/);

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [My process](#my-process)
  - [Understand the problem](#understand-the-problem)
  - [Pseudocode](#pseudocode)
  - [Mindmap](#mindmap)
  - [Useful sources](#useful-sources)
- [Approaches](#approaches)
  - [Fill Canvas](#fill-canvas)
  - [Clear Canvas](#clear-canvas)
  - [Rainbow Brush](#rainbow-brush)
- [Additional Improvements](#additional-improvements)
- [Attribution](#attribution)
- [Contact](#contact)

## Overview

As The Odin Project claims, this is about building a browser version of something between a sketchpad and an Etch-A-Sketch. Being such a simple but challenging assignment, I chose to previously design a minimalistic approach for the UI.

I wanted to build a project that resembles some of the nowadays software interfaces like Photoshop, Figma or Microsoft Paint 10. Even though at first I will try to build fewer tools just for the sake of completing it, I would like to keep adding more features and transform it into a cool sketching software.

## The Challenge

- [x] Build a browser version of etch-a-sketch
- [x] Put in practice those googling skills
- [x] Set up the 'hovering' effect in the grid
- [x] Add a Rainbow feature for colorful painting
- [x] Implement the Figma Design
- [x] Have fun

## My Process

> Thinking like a Programmer is about having fun with problem-solving

### Understand the problem

- How are we going to create the grid with javascript?
- Methods for arranging div's as a grid?
- Is there a simple way of listening to the hover effect?
  - How to create an event listener for hovering?
  - How to create an event listener for when the mouse leaves?
- How to change the color of the divs?
- How to make the rainbow brush?
- Are margins and borders going to be a problem when appending the squares?
- How can we use the grid method to append each square?
- How to delete all child elements with the DOM?

### Pseudocode

After reading the first chapter of the book "Think like a programmer", I wanted to put in practice that philosophy of "Always have a plan". For this purpose, I spend a few hours researching and thinking about the best way to implement each feature in plain english.

```
Select the grid-container with DOM
Select eachSquare with classSelectorAll
select clear button
Create a variable for pixelSize and assign it a value
Create newSquare function for creating each square and append it to grid container
    Create each square with createElement
    Assign it the class eachSquare
    Append this newSquare to grid-container
Create a function for rainbow colors
    Create an empty array for storing the three values
    Create a for loop until 3 values
        Create an equation for random values between 0 and 255
        Push each random value to the array
    return the array
Function for fillCanvas
    Create loop for inserting eachSquare until pixel size(pixelSize value * pixelSize value)
        Invoke newSquare function
Foreach newSquare (square)
    create an eventListener with mouseover
        square. add class of color to it for the trail
Create a function for clearing the canvas
    Add an event listener for clear button
        foreach newSquare
            add class of white
        prompt alert asking for a new pixelSize value
            pixelSize value is equal to user answer
    invoke fillCanvas again with the new pixelSize value
```

Obviously, after coding for a while, I had to re-arrange blocks and come up with solutions for a few other problems. Overall, it really helped me with speeding up the workflow.

### Mindmap

After finishing up the pseudocode method, I thought that some parts were a bit confusing to digest for my current level. That's why I tried to express each solution and function into a simple mindmap. This way I could visualize all the co-relations between variables and organize all of the ideas.

![Mindmap](images/mindmap.png)

### Useful Sources

- [Mouseover event listener](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event);
- [Methods for squaring a number](<https://www.delftstack.com/howto/javascript/javascript-square-a-number/#:~:text=Use%20the%20Math.,-pow()%20Method&text=One%20way%20to%20square%20a,to%20multiply%20it%20by%20itself.>)
- [forEach method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [How to use prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
- [How to delete all child elements with the DOM](https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript)
- [How to get a random Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Video tutorial on how the grid system works](https://www.youtube.com/watch?v=jV8B24rSN5o)

## Approaches

### Fill Canvas

Being the main feature of the sketchpad, I thought that it was going to be more troublesome. Nevertheless, with the aim of the pseudocode and a deep research into the grid system, I could easily implement this feature.

First I had to build a kind of Square Constructor. In future improvements, I would like to try re-writing this part with object-oriented programming, but for now, let's stick with Vanilla. Inside this constructor, I create each square with dom manipulation and append one single square to the parent grid-container.

```javascript
// Square constructor
let newSquare = function () {
  const singleSquare = document.createElement("div");
  singleSquare.classList.add("square");
  singleSquare.style.backgroundColor = "white";
  // Paint or erase each square
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
```

As you can see, I also applied the "mouseover" function in order to listen for each of the selected brushes. After this function, I just had to make a for loop until we could fill the entire grid-container. For this matter, I used math.pow so I could be sure that it was going to be exact.

```javascript
let fillCanvas = (pixelSize) => {
  //  Create loop for filling up all the canvas with squares
  for (let i = 0; i < Math.pow(pixelSize, 2); i++) {
    newSquare();
  }
};
fillCanvas(30);
```

As a final step, I just needed to be sure that the grid-container was displayed as a grid, and had the grid-template-column rule to repeat().

```css
#grid-container {
  width: 500px;
  height: 500px;
  background-color: white;
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
}
```

### Clear Canvas

This problem came out to be much more difficult than expected. First, I had to call a prompt for asking the user to write down a new canvas size. With that new value, I used a template literal for inserting that new value into the repeat() attribute from the grid css. Then it was time to get rid of all the previously inserted squares. The final step was to callback the fillcavas function with the new canvas size.

```javascript
// Clear Canvas
btnClear.addEventListener("click", function () {
  promptMessage("Please enter a new Canvas size");
  gridContainer.style.gridTemplateColumns = `repeat(${pixelSize}, 1fr)`;
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  fillCanvas(pixelSize);
});
```

### Rainbow Brush

One of the optional features that The Odin Project moderators asked for was adding a kind of rainbow brush. So each time the cursor touches a new square, a random rgb value fills this square. So it was as simple as making a for loop to add a random value into an empty array. Then, using a template literal to get each of those random values stored in the array.

```javascript
// Create a random rgb values
let randomRainbow = function () {
  let rainbowArr = [];
  for (let i = 0; i < 3; i++) {
    rainbowArr.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${rainbowArr[0]}, ${rainbowArr[1]}, ${rainbowArr[2]})`;
};
```

As you can see in the square constructor a few approaches above, I used this function when the rainbow variable (When the rainbow brush is selected) is set to true.

## Additional Improvements

- [ ] Change the image of the cursor to rainbow, brush or eraser
- [x] Solve hover and focus btn while selecting and painting
- [ ] Come up with a cleaner solution for hovering brushes feature
- [x] Make the prompt only with a number between 1 and 81
- [ ] Add a color picker
- [ ] Add a pixelSize bar slide
- [ ] Be able to export the current canvas

## Attribution

- Designed and Developed by Julen Diaz
- Icons by freepik

## Contact

[<img alt="Instagram" src="https://img.shields.io/badge/julen.dev%20-%23E4405F.svg?&style=for-the-badge&logo=Instagram&logoColor=white"/>](https://www.instagram.com/julen.dev/)
[<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/julenfront/)
[<img alt="Youtube" src="https://img.shields.io/badge/julendev%20-%23FF0000.svg?&style=for-the-badge&logo=YouTube&logoColor=white"/>](https://www.youtube.com/channel/UCUoloquxVnnNLFTD8RwthIQ)
[<img alt="Twitter" src="https://img.shields.io/badge/@julendev%20-%231DA1F2.svg?&style=for-the-badge&logo=Twitter&logoColor=white"/>](https://twitter.com/julendev)
