console.log("connected?");

const todoForm = document.getElementById("todo-form");
const todos = document.querySelector(".todos");
console.log(todoForm);
console.log(todos);

// submit 같은 event는 form한테 걸어야 됨.
// 결국 데이터 전송하고 하는 것은 form요소이기 때문.
todoForm.addEventListener("submit", (e) => {
  console.log("submit");
  e.preventDefault();
  // preventDefault() : 이벤트가 일어났을 때 브라우저의 기본동작을 막아줌.
  // submit이벤트가 일어나면 자동으로 새로고침함.
  // 그럼 우리는 submit이 출력되고 순식간에 새로고침되서 출력되는 것을 못 봄.
  // 그리고 todoInput.value도 새로고침되서 초기화 됨.
  // 새로고침을 막기 위해서 e.preventDefault()함수를 호출함.

  const todoInput = document.querySelector('input[name="todo"]');
  console.log(todoInput);
  console.dir(todoInput);
  console.log(todoInput.value);

  // input의 문자열 저장
  // const todo = todoInput.value;
  // const newTodo = document.createElement("li");
  // newTodo.append(todo);
  // todos.append(newTodo);

  const todo = todoInput.value.trim();
  if (todo !== "") {
    const newTodo = document.createElement("li");
    newTodo.append(todo); // newTodo.innerText(todo); 와 같음. 모든 태그에 해당됨.
    todos.append(newTodo);
  }

  todoInput.value = "";
});

const chgInput = document.querySelector("#change-input");
console.log(chgInput);

// 이벤트 : change는 요소의 상태가 변경되었을 때
// input type="text"는 선택이 해제되었을 때  change를 감지한다.
// 선택이 해제되었더라도 입력된 게 없으면 상태가 변경된 게 아님.
// 즉 내가 텍스트에 뭔가를 적고 선택을 해제하면 change가 감지된다.
// 그에 반해 input이벤트는 값이 변경된 순간순간 감지한다.
chgInput.addEventListener("change", function () {
  console.log("change!!");
  let div = document.querySelector(".intro");
  div.innerHTML += chgInput.value;
});

chgInput.addEventListener("input", function () {
  console.log("change?");
  let div = document.querySelector(".intro");

  div.innerHTML = chgInput.value;
});
