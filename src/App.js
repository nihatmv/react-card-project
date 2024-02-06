import React, { useState } from "react";
import "./App.css";
import flameTowersImage from "./assets/flame_towers.jpeg";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (number) => {
    setCount(count + number);
  };

  const renderContent = () => {
    if (count === 0) {
      return (
        <img
          src={flameTowersImage}
          className="image image-1"
          alt="Flame Towers"
          onClick={() => handleClick(1)}
        />
      );
    } else {
      return <div className="number">{count}</div>;
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <img
            src={flameTowersImage}
            className="image image-1"
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
    </div>
  );
}

export default App;
