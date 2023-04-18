import PropTypes from "prop-types";

// props = {name: "둘리", age: "400"}
// props를 넣어주면 props는 호출한 함수의 입력값으로 들어감.
// 구조분해해서 넣기.
function FunctionComponent({ name, age }) {
  return (
    <div>
      <h1>Hello World, Function Component</h1>
      <h5>{name}</h5>
      <h5>{age}</h5>
    </div>
  );
}

FunctionComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};

FunctionComponent.defaultProps = {
  name: "윤성인",
  age: "11",
};
/* 
const FunctionCompoenent = () => {

}
 */
export default FunctionComponent;
