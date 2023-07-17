import "./reset.css";
import "./App.scss";
import React, { useState } from "react";

// 画像を配列に入れる
const imageArray = [
  "pawmo-front.PNG",
  "pawmo-right.PNG",
  "pawmo-back.PNG",
  "pawmo-left.PNG",
  "pawmo-above.PNG",
  "pawmo-below.PNG",
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ImgChange = () => {
    switch (currentIndex) {
      case 0:
        return (
          <div className="buttons">
            <button
              className="button-position-top"
              onClick={() => setCurrentIndex(5)}
            ></button>
            <button
              className="button-position-right"
              onClick={() => setCurrentIndex(1)}
            ></button>
            <button
              className="button-position-bottom"
              onClick={() => setCurrentIndex(4)}
            ></button>
            <button
              className="button-position-left"
              onClick={() => setCurrentIndex(3)}
            ></button>
          </div>
        );
      case 1:
        return (
          <div className="buttons">
            <button
              className="button-position-top"
              onClick={() => setCurrentIndex(5)}
            ></button>
            <button
              className="button-position-right"
              onClick={() => setCurrentIndex(2)}
            ></button>
            <button
              className="button-position-bottom"
              onClick={() => setCurrentIndex(4)}
            ></button>
            <button
              className="button-position-left"
              onClick={() => setCurrentIndex(0)}
            ></button>
          </div>
        );
      case 2:
        return (
          <div className="buttons">
            <button
              className="button-position-top"
              onClick={() => setCurrentIndex(4)}
            ></button>
            <button
              className="button-position-right"
              onClick={() => setCurrentIndex(3)}
            ></button>
            <button
              className="button-position-bottom"
              onClick={() => setCurrentIndex(5)}
            ></button>
            <button
              className="button-position-left"
              onClick={() => setCurrentIndex(1)}
            ></button>
          </div>
        );
      case 3:
        return (
          <div className="buttons">
            <button
              className="button-position-top"
              onClick={() => setCurrentIndex(5)}
            ></button>
            <button
              className="button-position-right"
              onClick={() => setCurrentIndex(0)}
            ></button>
            <button
              className="button-position-bottom"
              onClick={() => setCurrentIndex(4)}
            ></button>
            <button
              className="button-position-left"
              onClick={() => setCurrentIndex(2)}
            ></button>
          </div>
        );
      case 4:
        return (
          <div className="buttons">
            <button
              className="button-position-top"
              onClick={() => setCurrentIndex(0)}
            ></button>
            <button
              className="button-position-right"
              onClick={() => setCurrentIndex(3)}
            ></button>
            <button
              className="button-position-bottom"
              onClick={() => setCurrentIndex(2)}
            ></button>
            <button
              className="button-position-left"
              onClick={() => setCurrentIndex(1)}
            ></button>
          </div>
        );
      case 5:
        return (
          <div className="buttons">
            <button
              className="button-position-top"
              onClick={() => setCurrentIndex(2)}
            ></button>
            <button
              className="button-position-right"
              onClick={() => setCurrentIndex(3)}
            ></button>
            <button
              className="button-position-bottom"
              onClick={() => setCurrentIndex(0)}
            ></button>
            <button
              className="button-position-left"
              onClick={() => setCurrentIndex(1)}
            ></button>
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="logo">
        <img src="logo.png" alt="" />
      </div>
      <div className="main">
        <img className="pawmi-picture" src={imageArray[currentIndex]} alt="" />
        {/* 上下左右の矢印を押したら画像が変わるようにする*/}
        <ImgChange />
      </div>
      <footer>
        <p>@2023 canymoff</p>
      </footer>
    </div>
  );
}

export default App;
