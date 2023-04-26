import { useState, useCallback } from "react";

function UseCallbackTest() {
  const [text, setText] = useState("");

  // useCallback()
  // 반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸주면
  // 함수를 메모리제이션(기억)해서 컴포넌트가 다시 랜더링되도
  // 기억하고 있는 기존 함수를 그대로 사용

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <h1>useCallback hook</h1>
      <input value={text} onChange={onChangeText} />
      <button>입력</button>

      <h2>작성한 값 : {text || "없음"}</h2>
    </>
  );
}

export default UseCallbackTest;

// useCallback vs. useMemo
// const 변수명 = useCallback(function, deps);
// const 변수명 = useMemo(() => function, dpes);

// useCallback: useMemo를 기반으로 만든 hook
// 단, "함수를 사용할 때" 편의성을 증진시킴.

// 공통점 : 성능 최적화
// 차이점
// -useMemo : '값'을 재사용
// => 값의 재사용을 위해 전달된 함수를 실행하고 "그 결과"를 메모리제이션
// -useCallback : "함수"를 재사용
// -> "함수의 재사용"을 위해 전달된 "함수 자체"를 메모리제이션
