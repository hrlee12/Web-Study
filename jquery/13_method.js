console.log("connected?");

function getValue() {
  let value = $("input").val();
  alert(value);
}

function setValue() {
  $("input").val("홀롤롤");
}

/* css */

function changeCssJS() {
  let span = document.querySelector("span");
  span.style = "font-size: 2-px;color:red;";
}

function changeCssJquery() {
  $("span").css("font-size", "40px");
  $("span").css("color", "blue");
  console.log($("span").css("color"));
}

function changeAttrJS() {
  let a = document.querySelector("a");
  a.setAttribute("href", "https://www.naver.com");
}

function changeAttrJquery() {
  $("a").attr("href", "https://www.daum.net");
}

/* text */
function changeTextJS() {
  let p = document.querySelector(".p-text");
  p.innerText = "js로 바꿨습니다.";
}

function changeTextJquery() {
  $(".p-text").text("<b>jquery로 바꿨습니다.</b>");
}

function changeHtmlJS() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "<b>js</b>로 바꿨습니다.";
}

function changeHtmlJquery() {
  $(".p-html").html("<b>jquery</b>로 바꿨습니다.");
}

/* 요소 추가하기 */

function appendJS() {
  let li = document.createElement("li");
  li.innerText = "append()로 추가된 js";
  let ul = document.querySelector(".colors");
  ul.append(li);
}

// jquery의 함수의 입력값으로 문자열 안에 태그를 넣으면 요소로 인식함.
function appendJquery() {
  $(".colors").append("<li>append()로 추가된 jquery</li>");
}

function prependJS() {
  let li = document.createElement("li");
  li.innerHTML = "prepend()로 추가된 js";
  let ul = document.querySelector(".colors");
  ul.prepend(li);
}

function prependJquery() {
  $(".colors").prepend("<li>prepend()로 추가된 jquery</li>");
}

function afterJS() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "after()) 형제요소로 추가된 js";

  green.after(li);
}

function afterJquery() {
  $(".green").after("<li>after() 형제요소로 추가된 jquery</li>");
}

function beforeJS() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "before() 형제요소로 추가된 js";

  green.before(li);
}

function removeJS() {
  let li = document.querySelector("#li2");
  li.remove();
}

function removeJquery() {
  $("#li2").remove();
}

// 태그 안 쪽에 빈값을 넣어서 내용 없애기.
function emptyJS() {
  let nums = document.querySelector("ul.nums");
  nums.innerHTML = "";
}

function emptyJquery() {
  $("ul.nums").empty();
}

/* 요소 탐색하기 */

function findParent() {
  console.log($(".child2").parent());
}

// js에서는 없는 메소드
function findParents() {
  console.log($(".child2").parents());
}

function findNext() {
  // next() : js의 nextSibling()
  console.log($(".child2").next());
}

// prev() : js의 previousSibling()
function findPrev() {
  console.log($(".child2").prev());
}

function findChildren() {
  console.log($(".parent").children());
  console.log(document.querySelector(".parent").children);
}

/* 클래스 조작
  vanilla js 전부 가능한 기능 */
function addClass() {
  $("#hi").addClass("bg-pink");
  $("#hi").addClass("fs-50");
}

// removeClass() 입력값 넣어주면 특정한 클래스만 제거
// 입력값 비워두면 클래스 전부 제거.
function removeClass() {
  // $("#hi").removeClass("fs-50");
  $("#hi").removeClass();
}

function hasClass() {
  console.log($("#hi").hasClass("bg-pink"));
}

function toggleClass() {
  $("#hi").toggleClass("bg-pink");
}
