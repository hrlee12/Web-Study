import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Clock from "./Clock";

// 루트에는 컴포넌트 하나만 들어감.
const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}, 1000);
