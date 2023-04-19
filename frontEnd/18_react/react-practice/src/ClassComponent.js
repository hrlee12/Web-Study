import React from "react";
import PropTypes from "prop-types";

class ClassComponent extends React.Component {
  render() {
    const { text, valid } = this.props;
    return (
      <>
        <br />
        <h1>실습3 </h1>
        <h2>{text}</h2>
        <button onClick={valid}>콘솔 메세지</button>
      </>
    );
  }
}

ClassComponent.propTypes = {
  text: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
};

ClassComponent.defaultProps = {
  text: "이건 기본 text props입니다.",
};

export default ClassComponent;
