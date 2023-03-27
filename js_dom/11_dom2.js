console.log("connected?");
let div1 = document.getElementById("div1");
console.log(div1);

// 요소.innerHTML : 내부 콘텐트 변경. 태그 다 먹힘.

div1.innerHTML = "여기는 <b>첫번째</b> 태그입니다. &hearts;";
console.log(div1.innerHTML);

// 요소.innerText : 내부 콘텐트를 변경하지만 찐 텍스트로 넣어버림. 태그 인식X
// 반환시 공백문자 없애줌.
div1.innerText = "여기는 <b>첫번째</b> 태그입니다. &hearts;";
console.log(div1.innerText);

// 요소.innerContent: 얘도 태그 그대로 보임. 그치만 공백문자 그대로 반환.
// IE9 이전 버전에서는 안됨.
div1.textContent = "      여기는 <b>첫번째</b> 태그입니다. &hearts;    ";

div1.innerContent = "      여기는 <b>첫번째</b> 태그입니다. &hearts;    ";

console.log(div1.textContent);
console.log(div1.innerContent);

console.log(div1.innerHTML);

div1.innerHTML = "<ul><li>안뇽</li><li>반가워</li></ul>";

/* 속성 변경
    요소.getAttribute(속성) : 속성값 가져오기
    요소.setAttribute(속성, 속성값) : 속성을 속성값으로 변경.
    
    . 접근법 : .으로 요소에 접근 가능
    요소.속성
    요소.속성 = 속성값 
*/

let naver = document.getElementById("naver");
console.log(naver);
naver.setAttribute("href", "https://www.google.com");
console.log(document.getElementById("pooh").id);
naver.href = "https://www.naver.com";

/* css 지정


1. 스타일 속성 사용 : 
요소.style.속성 = "속성값";
 */

let h1 = document.querySelector("h1");
let list = document.querySelectorAll("ul>li");
console.log(h1);
console.log(list);

// css와는 다르게 camelCase로 !
// js에서 css속성값이 보기로 안 떠서 다 외워야 하는 불편함 있음.
// 그래서 주로 스타일은 css로 하고 클래스 지정해서 추가하는 정도로만 하자 !
list[0].style.backgroundColor = "purple";
for (let li of list) {
  li.style.backgroundColor = "yellow";
  li.style.color = "#ddd";
  li.style.fontSize = "1.5rem";
}

/* 2. classList 
    classList.add : 클래스 추가
    classList.remove : 클래스 제거
    classList.contain : 있는지 없는지 확인, true/false 반환
    classList.toggle : 해당 클래스가 있으면 제거, 없으면 추가
*/
console.log(h1.classList);
h1.classList.add("add-h1");

/* 노드 찾기


*/
let friends = document.querySelector("#friends");
let tigger = document.querySelector("#tigger");
console.log(friends);
console.log(tigger);

console.log("==자식 노드에 접근하기==");
console.log(friends.children);
console.log(friends.children[0]); // 요소가 하나라도 리스트 형식으로

console.log("==부모 노드==");
console.log(tigger.parentNode);

console.log("==형제 노드==");
console.log(tigger.previousElementSibling);
// 맨 앞 요소?
console.log(tigger.nextElementSibling.nextElementSibling);

/* 요소 생성, 추가, 삭제

document.createElement("태그")  : 생성

요소1.append(요소2) : 요소1의 자식으로 요소2 추가
요소를 생성해서 html문서에 추가해줘야 됨. 


 */

let container = document.querySelector(".container");
console.log(container);

let p = document.createElement("p");
p.innerText = "새로 추가된 p";
p.style.foneWeight = "700";
p.style.backgroundColor = "red";

container.append(p);

let p2 = document.createElement("p");
let p3 = document.createElement("p");
p2.innerHTML = "p2";
p3.textContent = "p3";
p2.classList.add("p-2"); // 없던 클래스를 새로 만들어줘도 됨.
p3.classList.add("p-3");

// 선택된 요소의 마지막 자식으로 추가
container.append(p2, p3);
// 선택된 요소의 첫번째 자식으로 추가
let li1 = document.createElement("li");
li1.textContent = "캉가";
friends.prepend(li1);

/* before & after

before : 선택된 요소의 앞으로 추가
after : 선택된 요소의 뒤로 추가
 */

let h3 = document.createElement("h3");
h3.innerText = "h3";
h1.after("h3");

let h2 = document.createElement("h2");
h2.innerText = "h2";
h1.before(h2);

/* 요소 삭제

1. 요소.remove() : 본인 삭제
2. 요소.removeChild(요소2)  : 요소의 자식인 요소2 삭제. 
 */

let firstLi = document.querySelector("#friends > li");
console.log(firstLi);
let ul = firstLi.parentNode;
console.log(ul);

firstLi.remove();
// ul.removeChild(firstLi);

let img = document.createElement("img");
img.src = "../img/beach3.jpg";
img.alt = "바다 사진";
container.append(img);
