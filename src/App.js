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
  const directionList = ["top", "right", "bottom", "left"];
  const dataSet = [
    [5, 1, 4, 3],
    [5, 2, 4, 0],
    [4, 3, 5, 1],
    [5, 0, 4, 2],
    [0, 3, 2, 1],
    [2, 3, 0, 5],
  ];

  const ImgChange = () => {
    const buttons = dataSet[currentIndex];
    return (
      <div className="buttons">
        {buttons.map((item, index) => {
          return (
            <button
              key={index}
              className={`button-position-${directionList[index]}`}
              onClick={() => setCurrentIndex(item)}
            ></button>
          );
        })}
      </div>
    );
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
