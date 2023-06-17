import React, { useEffect, useState } from "react";
import CreateText from "./components/createText";

const App = () => {
  const [num, setNum] = useState(0);
  const [isdisplayed, setIsDisplayed] = useState(true);

  const clickCountUp = () => {
    setNum(num + 1);
  };

  const faseDisplayFlag = () => {
    setIsDisplayed(!isdisplayed);
  };

  useEffect(() => {
    console.log("aaaaaaaa");
      if (num % 3 === 0) {
        isdisplayed || setIsDisplayed(true);
      } else {
        isdisplayed && setIsDisplayed(false);
      }
  }, [num]);

  const contentStyle = {
    color: "blue",
    fontSize: "64px",
  };

  return (
    <>
      <h1 style={contentStyle}>こんにちは</h1>
      <CreateText color="blue">aaaaaaaaaaaa</CreateText>
      <CreateText color="blue">aaaaaaaaaaaa</CreateText>

      <button onClick={clickCountUp}>カウントアップ</button>
      <br></br>
      <button onClick={faseDisplayFlag}>on/off</button>
      <p>{num}</p>
      {isdisplayed && <p>^ ^</p>}
    </>
  );
};

export default App;
