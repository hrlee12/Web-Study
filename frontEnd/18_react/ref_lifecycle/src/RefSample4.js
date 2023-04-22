import React from "react";

class RefSample4 extends React.Component {
  myInput = React.createRef();

  handleFocus = () => {
    console.log(this); // RefSample3 현재 컴포넌트
    console.log(this.myInput.value); // input value 출력

    // this.myInput.focus();

    this.myInput.current.focus();
  };

  render() {
    return (
      <>
        <p>클래스형 컴포넌트에서 버튼 클릭시 input focusing</p>
        <input type="text" ref={this.myInput}></input>
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSample4;
