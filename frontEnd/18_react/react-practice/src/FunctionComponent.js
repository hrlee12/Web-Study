import PropTypes from "prop-types";
import "./FunctionComponent.css";

function FunctionComponent(props) {
  let style = {
    color: "red",
  };
  return (
    <>
      <h1>실습1</h1>
      <div>
        제가 좋아하는 음식은 <span style={style}>{props.food}</span>
        입니다.
      </div>
      <br />
      <h1>실습2</h1>
      <div className="bestSeller">
        <h2>이번주 베스트셀러</h2>
        <img
          src="http://image.yes24.com/goods/68881845/XL"
          alt="책 표지"
          width="100"
        ></img>
        <h3>{props.title}</h3>
        <div>
          저자: {props.author}
          <br />
          판매가: {props.price}
          <br />
          구분: {props.type}
        </div>
      </div>
    </>
  );
}

FunctionComponent.propTypes = {
  food: PropTypes.string.isRequired,
};

FunctionComponent.defaultProps = {
  food: "치킨",
};

export default FunctionComponent;
