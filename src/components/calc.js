import userEvent from '@testing-library/user-event';
import {useState} from 'react';

export default class BoxClass {
  constructor(i, j) {
    this.left = false;
    this.right = false;
    this.top = false;
    this.bottom = false;
    this.i = i;
    this.j = j;
  }
}

class Point {

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
   for (let i = 0; i < 10; i++) {
      grid[i]=[];
      for (let j = 0; j < 10; j++) {
         grid[i][j] = new BoxClass(i,j);
      }      
   }
   return grid;
}

export const generateMaze = (boxes) =>{
   // let entrance = Math.floor(Math.random()*10);
   // let exit = Math.floor(Math.random()*10);
   let entrance = [9,9];
   let exit = [0,0];
   let currPoint = entrance;
   let points = [[7,8], [8,2], [3,7], [4,2] ];
   // let pointsX = [7,8,3,4];
   // let pointsY = [8,2,7,2];

   for (let i = 0; i < 4; i++) {

      while(true){
         if (currPoint[0]===points[i][0] && currPoint[1]===points[i][1]){
            continue
         }
         let distanceX = currPoint[0]-points[i][0];
         let distanceY = currPoint[1]-points[i][1];

         let distance = Math.abs(distanceX) + Math.abs(distanceY);

         // randomly select direction for main path to move
         let moveX = Math.abs(distanceX) > Math.random();

         if(moveX === true){
            // assign values for currpoint
            if(distance>0){
               boxes[currPoint[0]][currPoint[1]].left = true;
               boxes[currPoint[0]-1][currPoint[1]].left = true;
               currPoint[0]-=1;
            } else {
               boxes[currPoint[0]][currPoint[1]].left = true;
               boxes[currPoint[0]+1][currPoint[1]].left = true;
               currPoint[0]+=1;
            }
         } else {
            // assign values for currpoint
            if(distance>0){
               boxes[currPoint[0]][currPoint[1]].left = true;
               boxes[currPoint[0]][currPoint[1]-1].left = true;
               currPoint[1]-=1;
            } else {
               boxes[currPoint[0]][currPoint[1]].left = true;
               boxes[currPoint[0]][currPoint[1]+1].left = true;
               currPoint[1]+=1;
            }
         }


      }
   }
      
}

