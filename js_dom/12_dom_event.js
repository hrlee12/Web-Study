let btn1 = document.querySelectorAll(".btn")[0];
let btn2 = document.querySelectorAll(".btn")[1];
let btn3 = document.querySelectorAll(".btn")[2];
let btn4 = document.querySelectorAll(".btn")[3];
console.log(btn1, btn2, btn3, btn4);

// 요소.addEventListener('동작이름', function() {});

btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭하셨네요 !");
});

// mouseover는 html의 hover랑 같음
btn1.addEventListener("mouseover", function () {
  this.style.backgroundColor = "aqua";
});

let container = document.getElementById("container");
console.log(container);

btn2.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.backgroundColor = "pink";
  div.innerHTML = "hi";
  container.append(div);
});

function changeColor() {
  let divs = document.querySelectorAll("#container div");
  for (let div of divs) {
    div.style.backgroundColor = "skyblue";
  }

  divs[divs.length - 1].style.backgroundColor = "yellow";
}

// changeColor()이렇게 괄호를 쓰면 이벤트가 일어났을 때 호출되는 게 아니라
// 이것을 읽는 순간 호출해버림.
btn3.addEventListener("click", changeColor);

// 코드의 재사용성을 위해 btn3 대신 this라는 키워드를 쓰면
// 요소가 바껴도 그 요소에 동작이 일어남.
btn4.addEventListener("click", changeBtnColor);
function changeBtnColor() {
  this.style.backgroundColor = "yellow";
  this.style.color = "#000";
}

// scrollY 글씨가 출력됨.. 왜지?
console.log(window);
// window는 따로 요소불러오지 않아도 기본으로 쓸 수 있는 것임.
window.addEventListener("scroll", function (event) {
  console.log(event);
  console.log(scrollY);
  let pos = document.querySelector(".pos");
  if (this.scrollY > 700) {
    pos.style.opacity = "1";
  }
});

const btn = document.querySelector("button");
const input = document.querySelector("input");
console.log(btn, input);
btn.addEventListener("click", function (event) {
  console.log(event);
});

input.addEventListener("keydown", function (e) {
  console.log(e);
  console.log(e.code);
  console.log(e.key);

  if (e.code === "ArrowLeft") {
    console.log("왼쪽 방향키를 누르셨군요!");
  } else if (e.code === "ArrowUp") {
    console.log("위쪽 방향키를 누르셨군요!");
  } else if (e.code === "ArrowDown") {
    console.log("아래쪽 방향키를 누르셨군요!");
  } else if (e.code === "ArrowRight") {
    console.log("오른쪽 방향키를 누르셨군요!");
  }
});
