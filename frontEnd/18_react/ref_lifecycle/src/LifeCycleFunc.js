// 부모 컴포넌트
import { useState } from "react";
import LifeCycleFuncChild from "./LIfeCycleFuncChild";

const LifeCycleFunc = () => {
  const [visible, setVisible] = useState(true);
  const [number, setNumber] = useState(5);
  const changeVisible = () => {
    setVisible(!visible);
  };

  const changeNumber = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <button onClick={changeNumber}>PLUS</button>
      <button onClick={changeVisible}>ON/OFF</button>
      {visible && <LifeCycleFuncChild number={number} />}
    </>
  );
};

export default LifeCycleFunc;
