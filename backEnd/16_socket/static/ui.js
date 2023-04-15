/*
let socket = io.connect();
let myNick;
socket.on("connect", () => {
  console.log("⭕Client Socket Connected >> ", socket.id);
});

const chatList = document.querySelector("#chat-list");
console.log(chatList);

// socket.emit("meSend", { msg: "hey" });
// socket.on("meSendRes", (data) => {
//   if (socket.id === data.socketID) {
//     console.log("same");
//   }
// });

socket.on("entrySuccess", (nick) => {
  // 1. 내 닉네임 설정
  myNick = nick;

  // 2. 닉네임 입력창 & 버튼 비활성화
  document.querySelector("#nickname").disabled = true; // 입력창 비활성화(클릭 막기)
  document.querySelector(".entry-box > button").disabled = true;

  // 3. div.chat-box 요소 보이기
  document.querySelector(".chat-box").classList.remove("d-none");
});


*/

// frontend js

// socket 사용을 위해서 객체 생성
let socket = io.connect();
let siofu = new SocketIOFileUpload(socket);
// document.addEventListener(
//   "DOMContentLoaded",
//   function () {
//     const file = document.querySelector("#uploadInput");
//     console.log(file);
//     siofu.listenOnInput(file);
//     console.log(siofu);
//     console.dir(siofu);
//     siofu.addEventListener("complete", function (event) {
//       console.log(event.success);

//       console.log("-------------------------------");

//       console.log(event.file);

//       alert("파일명 : " + event.file.name);
//     });
//   },
//   false
// );

// 나의 닉네임
let myNick;

socket.on("connect", () => {
  console.log("⭕️ Client Socket Connected >> ", socket.id);
});

// [실습3] 채팅창 입장 안내 문구
socket.on("notice", (msg) => {
  if (myNick) {
    document.querySelector("#chat-list").insertAdjacentHTML(
      // "afterbegin",
      "beforeend",
      `<div class="notice">${msg}</div>`
    );
  }
});

// [실습3-2]
function entry() {
  // const file = document.querySelector("#uploadInput");
  // console.log(file);
  // siofu.listenOnInput(file);
  // console.log(siofu);
  // console.dir(siofu);
  // siofu.addEventListener("complete", function (event) {
  //   console.log(event.success);

  //   console.log("-------------------------------");

  //   console.log(event.file);

  //   alert("파일명 : " + event.file.name);
  // });
  const fileInput = document.querySelector("#fileInput");
  console.log(fileInput.files);
  console.log(document.querySelector("#nickname").value);
  socket.emit("setNick", {
    nick: document.querySelector("#nickname").value,
    file: fileInput.files[0],
  });
}

socket.on("entrySuccess", (nick) => {
  // 1. 내 닉네임 설정
  myNick = nick;

  // 2. 닉네임 입력창 & 버튼 비활성화
  document.querySelector("#nickname").disabled = true; // 입력창 비활성화 (클릭 막기)
  document.querySelector(".entry-box > button").disabled = true; // 버튼 비활성화 (클릭 막기)

  // 3. div.chat-box 요소 보이기
  document.querySelector(".chat-box").classList.remove("d-none");
});

// [실습 3-2]
// 닉네임 중복 -> alert 띄우기
socket.on("error", (msg) => {
  alert(msg);
});

// [실습 3-2]
// 닉네임 리스트 객체 업데이트하는 이벤트를 받음
socket.on("updateNicks", (obj) => {
  let options = `<option value="all">전체</option>`;
  for (let key in obj) {
    if (key == socket.id) continue;
    options += `<option value=${key}>${obj[key]}</option>`;
  }

  console.log(options);

  document.querySelector("#nick-list").innerHTML = options;
  // select#nick-list
});

// [실습4] 채팅창 메세지 전송 step1
// 'send' 이벤트 전송 { 닉네임, 입력메세지 }
function send() {
  console.log("send함수 실행");
  if (document.querySelector("#message").value === "") {
    document.querySelector("#prompt-div").style.display = "inline-block";
    return;
  }
  document.querySelector("#prompt-div").style.display = "none";

  socket.emit("send", {
    myNick: myNick,
    msg: document.querySelector("#message").value,
    dm: document.querySelector("#nick-list").value,
    // select태그에서 선택한 option 태그의 value 값
  });

  document.querySelector("#message").value = ""; // 인풋 초기화
}

socket.on("newMessage", (obj) => {
  console.log("소켓 newMessage 잘 받음", obj.nick, obj.msg, obj.pic);
  let divChat = document.createElement("div");
  console.log(divChat);

  if (obj.dm) {
    divChat.classList.add("secret-chat");
    divChat.textContent = obj.dm;
  }
  let whosMsg;
  if (obj.nick === myNick) {
    whosMsg = "my-chat";
  } else {
    whosMsg = "other-chat";
  }

  divChat.textContent += `${obj.nick}: ${obj.msg}`;
  divContainer = document.createElement("div");
  divContainer.classList = whosMsg;
  // divContainer.innerHTML = `<img class='pic' src='${obj.pic}' alt=''>`;
  divContainer.append(divChat);

  console.log(divContainer);
  console.log("클래스 이름", whosMsg);
  if (myNick) {
    document.querySelector("#chat-list").append(divContainer);
  }

  const chatList = document.querySelector("#chat-list");
  console.log(chatList);
  console.log(chatList.scrollTop);
  console.log(chatList.scrollHeight);
  chatList.scrollTop = chatList.scrollHeight;
});

function enterkey() {
  if (window.event.keyCode == 13) send();
}
/* 
        <div class="my-chat">
          <div>user1: msg1</div>
        </div>
        <div class="other-chat">
          <div>user2: msg2</div>
        </div>

              <input type="text" id="message" />

*/
