import './App.css';
import Grid from './components/Grid.js'
import Navbar from './components/Navbar.js'
import {myGrid, initBoxes} from "./components/calc.js";
import {useState} from 'react';


function App() {
  const [count, setCount] = useState(6);
  const [boxes, setBoxes] = useState(null);
  const up = () =>{
    setBoxes(initBoxes());
  }


  return (
    <div className="App">
      <div className="content">
        <Navbar />
        {boxes && <Grid boxes={boxes}/>}
        <button onClick={() => up()}>{count}</button>
      </div>
    </div>
  );
}

export default App;
