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
              return <Box key={subItem.id} index={subItem.i} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
