import { Component } from "react";

class HandlerClass extends Component {
  state = {
    text: "Hello World!",
  };

  change = () => {
    this.state.text === "Hello World!"
      ? this.setState({ text: "Goodbye World!" })
      : this.setState({ text: "Hello World!" });
  };
  render() {
    const { text } = this.state;
    return (
      <>
        <h1>{text}</h1>
        <button onClick={this.change}>클릭</button>
      </>
    );
  }
}

export default HandlerClass;

/* 
// import React from 'react'
// 리액트의 Component를 import
import { Component } from "react";
import PropTypes from "prop-types";

// 리액트의 컴포넌트를 상속받으면 컴포넌트형 클래스가 됨.
class ClassComponent extends Component {
  // state는 오브젝트
  // 컴포넌트가 생성될 때 동적으로 변하는 데이터
  state = {
    counter: 0,
  };

  down = () => {
    this.setState((value) => ({ counter: value.counter - 1 }));
  };

  up = (name) => {
    console.log(name);
    this.setState({ counter: this.state.counter + 1 });
  };

  // 클래스형 컴포넌트일 때만 render함수 필수.
  render() {
    // console.log(this.props);
    // this.props = {name: '홍길동', age: '17'}
    const { name, age } = this.props;
    const { counter } = this.state;
    return (
      <div>
        <h1>Hello World, Class Component</h1>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{counter}</h2>
        <button onClick={() => this.up("abc")}>숫자업</button>
        <button onClick={this.down}>숫자다운</button>
      </div>
    );
  }
}

// props에 아무 값도 안 넣어줘도 오류없이 잘 작동함.
// 그걸 막기 위해 하는거임.
// 오류 뜸 (but 동작은 됨)
ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};

export default ClassComponent;
 */
