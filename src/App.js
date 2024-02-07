import React, { useState } from "react";
import "./App.css";
import flameTowersImage from "./assets/flame_towers.jpeg";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (number) => {
    setCount(count + number);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <img
            src={flameTowersImage}
            className="image"
            onClick={() => handleClick(1)}
          />
        </div>

        <div className="box">
          <img
            src={flameTowersImage}
            className="image"
            onClick={() => handleClick(2)}
          />
        </div>

        <div className="box">
          <img
            src={flameTowersImage}
            className="image"
            onClick={() => handleClick(3)}
          />
        </div>
      </div>

      <div className="container">
        <div className="box">
          <img
            src={flameTowersImage}
            className="image"
            onClick={() => handleClick(4)}
          />
        </div>

        <div className="box">
          <img
            src={flameTowersImage}
            className="image"
            onClick={() => handleClick(5)}
          />
        </div>

        <div className="box">
          <img
            src={flameTowersImage}
            className="image"
            onClick={() => handleClick(6)}
          />
        </div>
      </div>
      <p>Count : {count}</p>
      <div className="box box-script-1">1</div>
    </div>
  );
}

export default App;
