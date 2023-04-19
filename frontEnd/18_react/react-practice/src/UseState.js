import { useState } from "react";

function UseState() {
  const [num, setNum] = useState(0);
  const Increase = () => {
    setNum(num + 1);
  };

  const Decrease = () => {
    setNum(num - 2);
  };

  return (
    <>
      <h2>{num}</h2>
      <button onClick={Increase}>+1</button>
      <button onClick={Decrease}>-2</button>
    </>
  );
}

export default UseState;
