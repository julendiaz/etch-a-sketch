# Etch-a-Sketch | The Odin Project

<!-- ![Frame 1portadagithub](https://user-images.githubusercontent.com/66780327/115557714-475ba980-a2b2-11eb-870c-5dd59aa5517f.png) -->

Go to the [Live Preview](#);

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Screenshots](#screenshots)
- [My process](#my-process)
  - [Understand the problem](#understand-the-problem)
  - [Pseudocode](#pseudocode)
  - [Mindmap](#mindmap)
  - [Useful sources](#useful-sources)
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

## Screenshots

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

## Contact

[<img alt="Instagram" src="https://img.shields.io/badge/julen.dev%20-%23E4405F.svg?&style=for-the-badge&logo=Instagram&logoColor=white"/>](https://www.instagram.com/julen.dev/)
[<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/julenfront/)
[<img alt="Youtube" src="https://img.shields.io/badge/julendev%20-%23FF0000.svg?&style=for-the-badge&logo=YouTube&logoColor=white"/>](https://www.youtube.com/channel/UCUoloquxVnnNLFTD8RwthIQ)
[<img alt="Twitter" src="https://img.shields.io/badge/@julendev%20-%231DA1F2.svg?&style=for-the-badge&logo=Twitter&logoColor=white"/>](https://twitter.com/julendev)
