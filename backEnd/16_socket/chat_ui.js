const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const multer = require("multer");
const PORT = 8000;

// multer의 dest는 use의 경로 안 먹힘.
// 뒤에 /를 붙여야 경로라는 의미가 된다고 함.
const upload = multer({ dest: "uploads/" });

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.get("/", function (req, res) {
  console.log("client connected");
  res.render("chat_ui");
});

app.post("/profilePic", upload.single("profilePic"), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  res.send("Upload!!!");
});

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

  // [실습3] 채팅장 입장 안내 문구
  // io.emit('notice', `${socket.id.slice(0, 5)}님이 입장하셨습니다.`);
  // [실습3-2] 채팅창 입장 안내 문구 socket.id -> nickname
  socket.on("setNick", (obj) => {
    console.log("socket on setNick >> ", obj.nick); // 프론트에서 입력한 닉네임 값

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
    console.log("send소켓 잘 받음 >>> ", obj.myNick, obj.msg);
    if (obj.dm === "all") {
      io.emit("newMessage", { nick: obj.myNick, msg: obj.msg });
    } else {
      let dmSocketId = obj.dm;
      const sendData = {
        nick: obj.myNick,
        dm: "(속닥속닥)",
        msg: obj.msg,
      };

      // 1. dm을 보내고자 하는 그 socket.id한테 메세지 전송.
      io.to(dmSocketId).emit("newMessage", sendData);
      socket.emit("newMessage", sendData);
    }
  });
});

// 주의) socket 을 사용할 때는 http.listen으로 PORT 열어야 함!!!
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
