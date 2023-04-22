// 자식 컴포넌트
import { useEffect } from "react";
import { useState } from "react";
const LifeCycleFuncChild = ({ number }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("mount!!");

    return () => {
      console.log("unmount!!!");
    };
  }, []);

  useEffect(() => {
    console.log("update!!!!");
  }, [text]);
  return (
    <>
      <p>
        LifeCycleFuncChild<b>{number}</b>
      </p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default LifeCycleFuncChild;
