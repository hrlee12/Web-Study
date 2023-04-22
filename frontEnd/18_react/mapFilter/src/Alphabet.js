import { useState } from "react";

function Alphabet() {
  // alphabet state: 리스트에 대한 상태
  const [alpha, setAlpha] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "e" },
  ]);

  // inputAlpha state: input에 넣는 값에 대한 상태
  const [inputAlpha, setInputAlpha] = useState("");

  const addAlpha = () => {
    if (inputAlpha.trim().length === 0) {
      console.log("입력값이 공백문자이거나 없습니다.");
      setInputAlpha("");
      return;
    }

    const newAlpha = alpha.concat({
      id: Alphabet.length + 1,
      alpha: inputAlpha,
    });
    setAlpha(newAlpha);
    // if (document.querySelector("input").value.trim().length === 0) {
    //   console.log("공백문자 또는 입력값이 없습니다.");
    //   return;
    // }

    // setAlpha(
    //   alpha.concat({
    //     id: Alphabet.length + 1,
    //     alpha: document.querySelector("input").value,
    //   })
    // );
    document.querySelector("input").value = "";
    setInputAlpha("");
  };
  console.log(alpha);

  const deleteAlpha = (id) => {
    const newAlpha = alpha.filter((obj) => obj.id != id);
    setAlpha(newAlpha);
  };

  const activeEnter = (e) => {
    console.log(e.key);
    e.key == "Enter" && addAlpha();
  };

  return (
    <>
      <input
        type="text"
        value={inputAlpha}
        onChange={(e) => setInputAlpha(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={addAlpha}>추가</button>
      <ol>
        {alpha.map((obj) => {
          <li key={obj.id} onDoubleClick={() => deleteAlpha(obj.id)}>
            {obj.alpha}
          </li>;
        })}
      </ol>
    </>
  );
}

export default Alphabet;
