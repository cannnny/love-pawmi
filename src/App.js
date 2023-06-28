import "./reset.css";
import "./App.scss";
import React, { useState } from "react";

// 画像を配列に入れる
const imageArray = [
  "pawmo-front.png",
  "pawmo-above.png",
  "pawmo-right.png",
  "pawmo-left.png",
  "pawmo-below.png",
  "pawmo-back.png",
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ImgChange = () => {
    switch (currentIndex) {
      case 0:
        return (
          <div className="buttons">
            <button className="button-up" onClick={() => setCurrentIndex(1)}>
              ↑
            </button>
            <button className="button-right" onClick={() => setCurrentIndex(2)}>
              →
            </button>
            <button className="button-down" onClick={() => setCurrentIndex(4)}>
              ↓
            </button>
            <button className="button-left" onClick={() => setCurrentIndex(3)}>
              ←
            </button>
          </div>
        );
      case 1:
        return (
          <div className="buttons">
            <button className="button-up" onClick={() => setCurrentIndex(0)}>
              ↑
            </button>
            <button className="button-right" onClick={() => setCurrentIndex(2)}>
              →
            </button>
            <button className="button-down" onClick={() => setCurrentIndex(5)}>
              ↓
            </button>
            <button className="button-left" onClick={() => setCurrentIndex(3)}>
              ←
            </button>
          </div>
        );
      case 2:
        return (
          <div className="buttons">
            <button className="button-up" onClick={() => setCurrentIndex(1)}>
              ↑
            </button>
            <button className="button-right" onClick={() => setCurrentIndex(0)}>
              →
            </button>
            <button className="button-down" onClick={() => setCurrentIndex(4)}>
              ↓
            </button>
            <button className="button-left" onClick={() => setCurrentIndex(5)}>
              ←
            </button>
          </div>
        );
      case 3:
        return (
          <div className="buttons">
            <button className="button-up" onClick={() => setCurrentIndex(1)}>
              ↑
            </button>
            <button className="button-right" onClick={() => setCurrentIndex(5)}>
              →
            </button>
            <button className="button-down" onClick={() => setCurrentIndex(4)}>
              ↓
            </button>
            <button className="button-left" onClick={() => setCurrentIndex(0)}>
              ←
            </button>
          </div>
        );
      case 4:
        return (
          <div className="buttons">
            <button className="button-up" onClick={() => setCurrentIndex(0)}>
              ↑
            </button>
            <button className="button-right" onClick={() => setCurrentIndex(2)}>
              →
            </button>
            <button className="button-down" onClick={() => setCurrentIndex(5)}>
              ↓
            </button>
            <button className="button-left" onClick={() => setCurrentIndex(3)}>
              ←
            </button>
          </div>
        );
      case 5:
        return (
          <div className="buttons">
            <button className="button-up" onClick={() => setCurrentIndex(1)}>
              ↑
            </button>
            <button className="button-right" onClick={() => setCurrentIndex(2)}>
              →
            </button>
            <button className="button-down" onClick={() => setCurrentIndex(4)}>
              ↓
            </button>
            <button className="button-left" onClick={() => setCurrentIndex(3)}>
              ←
            </button>
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
