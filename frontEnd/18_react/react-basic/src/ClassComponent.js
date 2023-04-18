// import React from 'react'
// 리액트의 Component를 import
import { Component } from "react";
import PropTypes from "prop-types";

// 리액트의 컴포넌트를 상속받으면 컴포넌트형 클래스가 됨.
class ClassComponent extends Component {
  // 클래스형 컴포넌트일 때만 render함수 필수.
  render() {
    // console.log(this.props);
    // this.props = {name: '홍길동', age: '17'}
    const { name, age } = this.props;
    return (
      <div>
        <h1>Hello World, Class Component</h1>
        <h2>{name}</h2>
        <h2>{age}</h2>
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
