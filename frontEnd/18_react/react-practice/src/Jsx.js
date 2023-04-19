import "./Jsx.css";

function Jsx() {
  const name = "똘망이",
    animal = "강아지";
  const a = 2,
    b = 3;
  const title = "Hello World";
  return (
    <>
      <h1>실습 1</h1>
      <div>
        이것은 div입니다
        <h3>이것은 div안에 있는 h3태그입니다</h3>
      </div>
      <br />
      <h1>
        실습 2
        <br />제 반려 동물의 이름은 <u>{name}</u>입니다.
        <br />
        <u>{name}</u>는 <u>{animal}</u>입니다.
      </h1>
      <br />

      <h1>실습3</h1>
      <div>{3 + 5 === 8 ? "정답입니다!" : "오답입니다!"}</div>
      <br />

      <h1>실습4</h1>
      <div>{a > b ? "a가 b보다 큽니다" : "b가 a보다 큽니다"}</div>
      <br />

      <h1>실습5</h1>
      <div className="test">
        <h2>{title}</h2>
        <label for="id">아이디 : </label>
        <input type="text" id="id" className="input" />
        <br />
        <label for="pw">비밀번호 : </label>
        <input type="pw" id="pw" className="input" />
      </div>
      <br />

      <h1>실습6</h1>
      <div className="rainbow-container">
        <div className="red rainbow"></div>
        <div className="orange rainbow"></div>
        <div className="yellow rainbow"></div>
        <div className="green rainbow"></div>
        <div className="blue rainbow"></div>
        <div className="navy rainbow"></div>
        <div className="purple rainbow"></div>
      </div>
    </>
  );
}

export default Jsx;
