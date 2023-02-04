import userEvent from '@testing-library/user-event';
import {useState} from 'react';

export default class BoxClass {
  constructor(i, j) {
    this.left = true;
    this.right = true;
    this.top = true;
    this.bottom = true;
    this.i = i;
    this.j = j;
  }
}

export function setGridElement(newBox, boxes, i, j, setBoxes) {
   setBoxes(boxes.map((row) => (
      (row.id === i) ?
         row.map((el) => ( (el.id === j) ? newBox : el))
      :
      row
   ))
)};


export const initBoxes = () => {
   var grid = [];
   for (let i = 0; i < 8; i++) {
      grid[i]=[];
      for (let j = 0; j < 8; j++) {
         grid[i][j] = new BoxClass(i,j);
      }      
   }
   return grid;
}


// export const myGrid = grid.map((x) => x);
