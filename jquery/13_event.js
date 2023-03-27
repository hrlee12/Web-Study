console.log("connected?");

console.log(window);
console.log(document);

// jquery에서 window, document 가져올 때는 문자열 처리 안해도 됨.
console.log($(window));
console.log($(document));

// mouse event
// click(function(){}), mouseover(function(){})
// hover(function(){}, fucntion(){})
// 첫번째 인자는 마우스를 올렸을 때, 두번째 인자는 마우스를 땠을 때

// 1. click() : 클릭이 일어났을 때!!!
$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

// on()  : addEventListener()
// $(this)를 하면 클릭된 아이에만 적용됨.
$(".num").on("click", function () {
  $(this).css("color", "blue");
});

// 가능하긴 하지만 css로 처리하는 게 더 나음.
$(".div-hover").hover(
  function () {
    $(this).addClass("hover1");
  },
  function () {
    $(this).removeClass();
  }
);

// scroll
$(window).scroll(function () {
  console.log("scrol!!!!!!!!!!!!!");
});

//keydown()
$(".input-key").keydown(function (event) {
  console.log(event.code);
  //   console.log(event.key);    key는 잘 안 쓰임. code를 쓰자.
  if (event.code === "ArrowUp") {
    console.log("up");
  } else if (event.code === "ArrowDown") {
    console.log("down");
  } else if (event.code === "ArrowLeft") {
    console.log("left");
  } else if (event.code === "ArrowRight") {
    console.log("right");
  } else {
    console.log("others");
  }
});

/* 
    <h2>submit event</h2>
    <form id="todo-form">
      <input type="text" name="todo" />
      <button>Add</button>
    </form>
    <ul class="todos"></ul>

*/

$("#todo-form").on("submit", function (e) {
  e.preventDefault();
  const todo = $('[name="todo"]');
  $(".todos").append(`<li>${todo.val()}</li>`);
  todo.val("");
});
