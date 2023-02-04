import { useState } from "react";
import "./Grid.css";
import { myGrid } from "./calc.js";
import Box from "./Box";

function Grid(props) {
  

  return (
    <div className="myGrid">
      {props.boxes.map((items) => {
        return (
          <div className="gridLine" key={items.id}>
            {items.map((subItem) => {
              return <Box key={subItem.id} i={subItem.i} j={subItem.j} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
