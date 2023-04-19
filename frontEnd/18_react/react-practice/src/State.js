import React from "react";

class State extends React.Component {
  state = {
    num: 0,
  };
  up = () => {
    this.setState({ num: this.state.num + 2 });
  };

  down = () => {
    this.setState({ num: this.state.num - 2 });
  };

  render() {
    const { num } = this.state;
    return (
      <>
        <h2>{num}</h2>
        <button onClick={this.up}>+2</button>
        <button onClick={this.down}>-2</button>
      </>
    );
  }
}

export default State;
