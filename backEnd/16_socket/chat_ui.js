// https://socket.io/how-to/upload-a-file
/* const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 7020;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  console.log("client connected");
  res.render("chat_ui");
});

// io.on(event_name, callback)
// : socket과 관련된 통신 작업 처리
// 이벤트가 발생하면 콜백함수 실행
io.on("connection", (socket) => {
  // "connection" event
  // - 클라이언트가 접속했을 때 발생하는 이벤트
  // - 콜백으로 socket 객체를 제공

  // ⭕❌
  // 최초 입장시 연결
  // socket.id : 소켓 고유 아이디 -> 웹 페이지별로 id 생성!
  // 세션은 브라우저 별로 id 생성
  // -> 크롬에서 탭 2개 띄우면 socket.id는 각각 생김 (2개)
  console.log("⭕ Server Socket Connected >> ", socket.id);

  socket.on("meSend", (data) => {
    socket.emit("meSendRes", { socketID: socket.id, msg: data.msg });
  });


  nickObj = {};
socket.on('setNikc', (nick) => {
  console.log('socket on setNick >> ', nick);

  nickObj[socket.id] = nick;   // nickObj 객체에 '소켓_아이디 : 닉네임' 추가
  io.emit('notice', `${nick}님이 입장하셨습니다.`) // 입장 메세지 '전체 공지'
  // 정체 공지 => 서버에 접속한 모든 클라이언트에게 이벤트 전송
  socket.emit('entrySuccess', nick); // 입장 성공시
});
});

// 주의) socket 을 사용할 때는 http.listen으로 PORT 열어야 함!!!
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
 */

const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const fs = require("fs");
const writeFile = fs.writeFile;
// const socketUpload = require("socketio-file-upload");
// const multer = require("multer");
// const path = require("path");
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
// app.use("/uploads", express.static(__dirname + "/uploads"));
// app.use(socketUpload.router);

app.get("/", function (req, res) {
  console.log("client connected");
  res.render("chat_ui");
});

console.log(writeFile);

// 닉네임을 저장할 객체
// : 닉네임이 겹치지 않도록 객체({ })를 사용함
// { 소켓_아이디: 닉네임, ... }
const nickObj = {};

// 닉네임 리스트 객체 업데이트
// 유저가 들어오거나 퇴장할 때 내역 업데이트
function updateNickList() {
  // 서버에 접속한 클라이언트들에게 nickObj에 변경이 일어났음을 알리는 이벤트
  io.emit("updateNicks", nickObj);
}

// io.on(event_name, callback)
// : socket과 관련된 통신 작업 처리
io.on("connection", (socket) => {
  // "connection" event
  // - 클라이언트가 접속했을 때 발생하는 이벤트
  // - 콜백으로 socket 객체를 제공

  // 최초 입장시 (연결)
  // socket.id: 소켓 고유 아이디 -> socket 은 웹 페이지별로 id 생성!
  // => 크롬에서 탭 2개 띄우면 socket.id 는 각각 생김 (2개)
  console.log("⭕ Server Socket Connected >> ", socket.id);

  // let uploader = new socketUpload();
  // uploader.dir = "/uploads";
  // uploader.listen(socket);
  // uploader.on("saved", function (event) {
  //   console.log(event.file);
  // });

  // uploader.on("error", function (event) {
  //   console.log("Error from uploader", event);
  // });
  // [실습3] 채팅장 입장 안내 문구
  // io.emit('notice', `${socket.id.slice(0, 5)}님이 입장하셨습니다.`);
  //, , ,
  // [실습3-2] 채팅창 입장 안내 문구 socket.id -> nickname
  socket.on("setNick", (obj) => {
    console.log("socket on setNick >> ", obj.nick, obj.file); // 프론트에서 입력한 닉네임 값
    writeFile(`./uploads/${obj.nick}.jpg`, obj.file, (err) => {
      if (err) console.log(err);
      else console.log("success");
    });

    console.log(nickObj);
    // 닉네임 중복 여부
    // 오브젝트 모든 값을 리스트로 반환
    const values = Object.values(nickObj);
    if (values.indexOf(obj.nick) !== -1) {
      // 아이디 중복
      socket.emit("error", "이미 존재하는 닉네임입니다. 다시 입력해주세요!!");
    } else {
      // 아이디 통과
      nickObj[socket.id] = obj.nick; // nickObj 객체에 "소켓_아이디: 닉네임" 추가
      socket.emit("entrySuccess", obj.nick); // 입장 성공시

      io.emit("notice", `${obj.nick}님이 입장하셨습니다.`); // 입장 메세지 "전체 공지"
      // 전체 공지 => 서버에 접속한 모든 클라이언트에게 이벤트 전송
      updateNickList(); // 닉네임 리스트 객체 업데이트
    }
  });

  // [실습3-3] 접속자 퇴장
  // disconnect event : 클라이언트가 연결을 끊었을 때 발생 (브라우저 탭 닫음)
  socket.on("disconnect", () => {
    console.log("**** ❌ Server Socket Disconnected >>", socket.id);
    console.log("삭제 전 >>", nickObj);
    if (nickObj[socket.id]) {
      io.emit("notice", `${nickObj[socket.id]}님이 퇴장하셨습니다.`);
      delete nickObj[socket.id];
      console.log("삭제 후 >>", nickObj);

      updateNickList();
    }
  });

  socket.on("send", (obj) => {
    let pic;
    const exists = fs.existsSync(`./uploads/${obj.myNick}.jpg`);
    console.log("exist ? >>", exists);
    if (exists) {
      pic = `./uploads/${obj.myNick}.jpg`;
    } else {
      pic = `./uploads/default.jpg`;
    }
    console.log("변수 pic >>>", pic);

    console.log("send소켓 잘 받음 >>> ", obj.myNick, obj.msg);
    if (obj.dm === "all") {
      io.emit("newMessage", { nick: obj.myNick, msg: obj.msg, pic: pic });
    } else {
      let dmSocketId = obj.dm;
      const sendData = {
        nick: obj.myNick,
        dm: "(속닥속닥)",
        msg: obj.msg,
        pic: pic,
      };

      // 1. dm을 보내고자 하는 그 socket.id한테 메세지 전송.
      io.to(dmSocketId).emit("newMessage", sendData);
      socket.emit("newMessage", sendData);
    }
  });
});
// fs.exists(`./uploads/default.jpg`, (exists) => {
//   console.log("exists? >>> ", exists);
// });

// fs.readFile("./uploads/default.jpg", function (err, data) {
//   pic = data;
//   console.log(err);
//   console.log("readFile >>>", pic);
// });
// 주의) socket 을 사용할 때는 http.listen으로 PORT 열어야 함!!!
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
