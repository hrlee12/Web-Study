// src/store/counterReducer.js

// action type 정의
//                  모듈/액션이름
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// increase(), decrease()
// 컴포넌트에서 액션을 쉽게 발생시키기 위해
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });
// state 초기값 설정
const initialState = {
  number: 10,
};

// Reducer 정의: 변화를 일으키는 함수
// dispatch가 실행됐을 때 호출되는 함수
// 최초에만 state에 initialState가 들어감.
// 그 뒤에는 store에서 가져옴
// return하면 스토어로 가서 return한 값이 스토어로 저장됨.
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + 1 };
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

// 다른 파일에서 reducer()를 사용할 수 있도록 내보내기
export default counterReducer;
