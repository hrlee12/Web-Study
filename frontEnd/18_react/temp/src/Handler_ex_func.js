import { useState } from "react";

function HandlerFunc() {
  const [text, setText] = useState("Hello World!");

  function change() {
    text === "Hello World!"
      ? setText("Goodbye World!")
      : setText("Hello World!");
  }
  return (
    <>
      <h1>{text}</h1>
      <button onClick={change}>클릭</button>
    </>
  );
}

export default HandlerFunc;
