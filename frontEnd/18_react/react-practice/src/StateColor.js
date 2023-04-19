import { useState } from "react";

function StateColor() {
  const [text, setText] = useState("검정색 글씨");
  const [style, setStyle] = useState("black");

  console.log(text, style);

  function TurnRed() {
    setText("빨간색 글씨");
    setStyle("red");
  }

  const TurnBlue = () => {
    setText("파란색 글씨");
    setStyle("blue");
  };
  return (
    <>
      <h2 style={{ color: style }}>{text}</h2>
      <button onClick={TurnRed}>빨간색</button>
      <button onClick={TurnBlue}>파란색</button>
    </>
  );
}

export default StateColor;
