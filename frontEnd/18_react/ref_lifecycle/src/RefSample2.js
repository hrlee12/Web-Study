import { useRef } from "react";

const RefSample2 = () => {
  // 1. useRef()를 이용해 로컬 변수 만들기
  const id = useRef(1);
  console.log(id);

  const plusId = () => {
    // id 값 증가
    id.current += 1;
    console.log(id);
  };
  const minusId = () => {
    // id 값 증가
    id.current -= 1;
    console.log(id);
  };
  return (
    <>
      <h1>{id.current}</h1>
      <button onClick={plusId}>plus ref</button>
      <button onClick={minusId}>minus ref</button>
    </>
  );
};

export default RefSample2;
