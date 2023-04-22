// js문법은 중괄호 안에
// css문법은 중괄호 두개 안에. {{ 블라블라 }}
// css문법은 kecab-case안되고 camelCase로 작성
// onClick
// onClick에 들어가는 함수는 괄호 작성 금지 !!
// App함수의 return에는 오직 한개의 태그가 와야 됨. (나머지는 다 자식으로)
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

function App() {
  return (
    <>
      {/* <ClassComponent name="홍길동" age="17" />
      <ClassComponent name="성춘향" age="21" />
      <ClassComponent /> */}
      <FunctionComponent />
    </>
  );
}

export default App;
