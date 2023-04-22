import { useState } from "react";

function RenderInf() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inf, setInf] = useState([
    { id: 1, name: "코디", email: "codi@gmail.com" },
    { id: 2, name: "윤소희", email: "yoonsohee@gmail.com" },
  ]);

  function updateInf() {
    // 둘 중 하나라도 입력 안 되면 업데이트 x
    if (name.trim().length === 0 || email.trim().length === 0) {
      alert("입력값이 비었습니다.");
      return;
    }

    const newInf = inf.concat([
      { id: inf.length + 1, name: name, email: email },
    ]);
    console.log(newInf);
    setInf(newInf);
    setName("");
    setEmail("");
  }

  function activeEnter(e) {
    if (e.key === "Enter") updateInf();
  }

  function deleteInf(id) {
    const newInf = inf.filter((obj) => obj.id != id);
    setInf(newInf);
  }
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={updateInf}>등록</button>
      {inf.map((obj) => {
        return (
          <div key={obj.id} onDoubleClick={() => deleteInf(obj.id)}>
            {obj.name}: {obj.email}
          </div>
        );
      })}
    </>
  );
}

export default RenderInf;
