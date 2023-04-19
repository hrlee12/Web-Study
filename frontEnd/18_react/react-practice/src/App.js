import Jsx from "./Jsx.js";
import FuncCom from "./FunctionComponent.js";
import ClassCom from "./ClassComponent.js";
import State from "./State.js";
import UseState from "./UseState.js";
import StateColor from "./StateColor.js";
import StateHidden from "./StateHidden.js";

function App(props) {
  function valid() {
    console.log("콘솔 출력 완료");
  }
  return (
    <>
      <StateColor />
      <StateHidden />
      {/* <State />
      <UseState /> */}
      {/* <Jsx />
      <FuncCom
        title={props.title}
        author={props.author}
        price={props.price}
        type={props.type}
      />
      <ClassCom text={props.text} valid={valid} /> */}
    </>
  );
}

export default App;
