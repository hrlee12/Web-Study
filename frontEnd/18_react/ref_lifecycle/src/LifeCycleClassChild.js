import React from "react";

class LifeCycleClassChild extends React.Component {
  componentDidMount() {
    console.log("mount");
  }

  componentDidUpdate() {
    console.log("update");
  }

  componentWillUnmount() {
    console.log("unmount");
  }
  render() {
    return (
      <>
        <p>LifeCycleClassChild {this.props.number} </p>
      </>
    );
  }
}

export default LifeCycleClassChild;
