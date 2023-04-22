import { useState } from "react";

function RenderInfTable() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [inf, setInf] = useState([]);

  const [srchInf, setSrchInf] = useState([]);
  const [srchType, setSrchType] = useState("name");
  const [srchKeyword, setSrchKeyword] = useState("");

  function updateInf() {
    if (name.trim().length === 0 || title.trim().length === 0) {
      alert("값을 입력해주세요.");
      return;
    }

    // const newInf = inf.concat([
    //   { key: inf.length + 1, name: name, title: title },
    // ]);
    // setInf(newInf);

    const newInf = { key: inf.length + 1, name: name, title: title };
    setInf([...inf, newInf]);
    console.log("inf >> ", inf);
    setName("");
    setTitle("");
  }

  function search() {
    const newSrchInf = inf.filter((obj) => obj[srchType].includes(srchKeyword));
    setSrchInf(newSrchInf);
    setSrchKeyword("");
  }
  function searchAll() {
    setSrchInf(inf);
    setSrchKeyword("");
  }
  return (
    <>
      <form>
        <fieldset>
          <label htmlFor="name">작성자 </label>
          <input
            id="name"
            placeholder="작성자"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label htmlFor="title">제목 </label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <button type="button" onClick={updateInf}>
            작성
          </button>
        </fieldset>
      </form>
      <br />
      {/* <form> */}
      <select name="type" onChange={(e) => setSrchType(e.target.value)}>
        <option value="name">작성자</option>
        <option value="title">제목</option>
      </select>
      <input
        type="text"
        placeholder="검색어"
        value={srchKeyword}
        onChange={(e) => setSrchKeyword(e.target.value)}
      />
      <button onClick={search}>검색</button>
      <button onClick={searchAll}>전체</button>
      {/* </form> */}
      <h4>전체 댓글 목록</h4>
      <table border="double" width="500px">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {inf.map((obj) => {
            return (
              <tr key={obj.key}>
                <td>{obj.key}</td>
                <td>{obj.title}</td>
                <td>{obj.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <br />
      <h4>댓글 검색 결과</h4>
      {srchInf.length > 0 ? (
        <table border="double" width="500px">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {srchInf.map((obj) => {
              return (
                <tr key={obj.key}>
                  <td>{obj.key}</td>
                  <td>{obj.title}</td>
                  <td>{obj.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h5> 검색 결과가 없습니다.</h5>
      )}
    </>
  );
}

export default RenderInfTable;
