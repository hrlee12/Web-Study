import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App
      title="일간 이슬아 수필집"
      author="이슬아"
      price="17000"
      type="에세이"
      text="App 컴포넌트에서 넘겨준 text props입니다."
      valid="콘솔 띄우기 성공!"
    />
  </React.StrictMode>
);
