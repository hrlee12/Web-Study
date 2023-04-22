import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// props = {name: "둘리", age: "400"}
// props를 넣어주면 props는 호출한 함수의 입력값으로 들어감.
// 구조분해해서 넣기.
function FunctionComponent({ name, age }) {
  const [state, setState] = useState("");

  useEffect(() => {
    console.log(state);
  }, []);

  const enter = () => {
    setState("입장하였습니다.");
  };
  const exit = () => {
    setState("퇴장하였습니다.");
  };
  return (
    <div>
      <h1>Hello World, Function Component</h1>
      <button onClick={enter}>입장</button>
      <button onClick={exit}>퇴장</button>
      <h2>{state}</h2>
      <h5>{name}</h5>
      <h5>{age}</h5>
    </div>
  );
}

FunctionComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};

// props에 아무것도 안 들어왔을 때 default값 넣어주.ㅁ
FunctionComponent.defaultProps = {
  name: "윤성인",
  age: "11",
};
/* 
const FunctionCompoenent = () => {

}
 */
export default FunctionComponent;
