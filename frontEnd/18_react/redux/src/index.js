import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App4";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store";
// store 정의 : 상태를 관리하는 저장공간
// 하나의 프로젝트에는 하나의 store만 있어야 함!
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Provider 컴포넌트 : store props를 반드시 가져야 함.
  // Provider의 하위 컴포넌트들은 store에 저장된 state들을 사용 가능 !
  <Provider store={store}>
    <App />
  </Provider>
);
