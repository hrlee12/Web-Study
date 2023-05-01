import "./styles/Box.css";
import {
  Box1Container,
  Box2Container,
  Box3Container,
} from "./cotainers/BoxesContainers";
function App() {
  // useSelector() hook
  // : redux store의 state를 조회
  // 인자로 콜백함수
  // 콜백함수의 매개변수로 state를 받을 수 있음.

  return (
    <div className="App">
      Redux Test
      <h1>Box 1</h1>
      <Box1Container />
    </div>
  );
}

export const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      <Box2Container />
    </div>
  );
};

export const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2 </h2>
      <Box3Container />
    </div>
  );
};

export const Box3 = ({ number, onIncrease, onDecrease }) => {
  return (
    <div className="Box">
      <h2>Box3 : {number}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <button>CHANGE</button>
    </div>
  );
};

export default App;
