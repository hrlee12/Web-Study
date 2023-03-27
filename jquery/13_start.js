console.log("connected?");
console.log(document.querySelectorAll("button"));

// 기본으로 jquery로 요소를 불러오면 해당되면 요소를 전부 가져옴.
// 그리고 그렇게 가져온 요소에 함수를 쓰면 요소 전부에 적용됨.
// js로는 인덱스로 하나하나 접근했어야 됨.
$("button").css("color", "red");

function submitjs() {
  document.querySelector("#div1").innerHTML = "반갑습니다.";
  document
    .getElementById("div1")
    .setAttribute("style", "border:2px solid blue");
}

function submitjquery() {
  $("#div1").html("잘지내세요");
  $("#div1").css("border", "3px dotted green");
}
