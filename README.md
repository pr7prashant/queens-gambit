# Queen's Gambit

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)

## General info

This project is simple game in which you have to place two queens on the chess board such that they don't capture each other. Queens can either move diagonally, horizontally or vertically on the board. User can click anywhere on the board to place the first queen. User will click again to place the second queen, but if the first queen can capture it then a cross will be placed over the tile. The cross will disappear after two seconds. If the user clicks on a tile where a queen can be placed (which cannot be captured by the first queen) then a green circle will be added.

## Technologies

Project is created with:

- React: 17.0.1
- Redux: 4.0.5
- Webpack: 4.44.2

## Setup

To run this project, install it locally using yarn or npm:

```
$ cd ../queens-gambit
$ yarn install
$ yarn start
```
