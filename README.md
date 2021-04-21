# Rock Paper Scissors - TOP + Front-End Mentor

<!-- ![Frame 1portadagithub](https://user-images.githubusercontent.com/66780327/115557714-475ba980-a2b2-11eb-870c-5dd59aa5517f.png) -->

Go to the [Live Preview](#);

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Screenshots](#screenshots)
- [My process](#my-process)
  - [Understand the problem](#understand-the-problem)
  - [Pseudocode](#pseudocode)
- [Useful sources](#useful-sources)
- [Additional Improvements](#additional-improvements)
- [Attribution](#attribution)
- [Contact](#contact)

## Overview

As The Odin Project claims, this is about building a browser version of something between a sketchpad and an Etch-A-Sketch. Being such a simple but challenging assignment, I chose to previously design a minimalistic approach for the UI.

I wanted to build a project that resembles some of the nowadays software interfaces like Photoshop, Figma or Microsoft Paint 10. Even though at first I will try to build fewer tools just for the sake of completing it, I would like to keep adding more features and transform it into a cool sketching software.

## The Challenge

- [ ] Build a browser version of etch-a-sketch
- [ ] Put in practice those googling skills
- [ ] Set up the 'hovering' effect in the grid
- [ ] Add a Rainbow feature for colorful painting
- [ ] Implement the Figma Design
- [ ] Have fun

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

### Pseudocode

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

## Useful Sources

- [Mouseover event listener](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event);

## Additional Improvements

## Attribution

- Designed and Developed by Julen Diaz

## Contact

[<img alt="Instagram" src="https://img.shields.io/badge/julen.dev%20-%23E4405F.svg?&style=for-the-badge&logo=Instagram&logoColor=white"/>](https://www.instagram.com/julen.dev/)
[<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/julenfront/)
[<img alt="Youtube" src="https://img.shields.io/badge/julendev%20-%23FF0000.svg?&style=for-the-badge&logo=YouTube&logoColor=white"/>](https://www.youtube.com/channel/UCUoloquxVnnNLFTD8RwthIQ)
[<img alt="Twitter" src="https://img.shields.io/badge/@julendev%20-%231DA1F2.svg?&style=for-the-badge&logo=Twitter&logoColor=white"/>](https://twitter.com/julendev)
