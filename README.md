# Slider Puzzle

## What's a Slider puzzle?

A slider puzzle is a type of puzzle in which you have a small grid, usually `4 by 4` sized, but it could be any `n by m` grid. Each piece of the grid has a number on it, starting at 1, incremented until `(n * m) - 1`. In our typical `4 by 4` example, this means 1 to 15. The last grid space is empty. The empty space allows for other pieces to move around into the empty space. The goal of the puzzle is to move all the pieces around until the numbers are sorted smallest to largest from left to right, top down, with the empty space being in the bottom right corner.

To better illustrate this, below is a picture of the puzzle in it's completed state: (Pictures can also be found in root of the project, if rendered markdown isn't working)

![Slider Puzzle Example in solved state](/example_puzzle_solved.jpg)

The same puzzle, but shuffled randomly, is below:

![Slider Puzzle Example in shuffled state](/example_puzzle_shuffled.jpg)

To illustrate how pieces move around, imagine that we want to move the 14 piece into the currently empty space.

![Slider Puzzle Example, showing moving piece 14](/example_puzzle_move_piece_1.jpg)

The end result is that the 14 is now in the bottom right corner, where the empty space was, and the empty space is now where piece 14 was.

![Slider Puzzle Example, showing result of moving piece 14](/example_puzzle_move_piece_2.jpg)

## Prompt

The goal is to, using React, create a working version of the a 15 slider puzzle game (a `4 by 4` grid). It doesn't need to be flashy or look pretty, we only ask that it is 'functional', and gets the point across. That is to say, we care much more about how you implemented and structured the puzzle vs what the game looks like to users.

The minimum requirements include:
* The game starts in an already 'randomly shuffled' state so we can begin trying to solve it
* The puzzle grid is displayed to the user in some way. This need not be complicated or pretty.
* You can move pieces around by clicking on a valid piece you would like to move.
* You can't make invalid moves (moves that would be impossible on a physical version of the puzzle)

How you implement this is completely up to you! We only ask that all of your code should be called from the `App.js` file. You may either do all your work in `App.js` or create additional files/Components as you see fit, the project's structure is up to you.

You are not required to write unit tests and we won't be looking for them, however feel free to include these if they help you debug or validate your code.

## Setup Instructions

1. Install [Node](https://nodejs.org/en/) if you don't already have it
2. Run `npm install`
3. Run `npm start`


## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
