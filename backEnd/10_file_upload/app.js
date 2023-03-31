const express = require("express");
const app = express();
const PORT = 8000;

const multer = require("multer");
// path : 파일, 폴더 경로를 쉽게 설정. 내장 모듈임
const path = require("path");
const upload = multer({
  // 업로드할 파일 경로 지정
  dest: "uploads/",
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", function (req, res) {
  res.render("index");
});

// single() : 하나의 파일 업로드할 때
// single()의 매개변수 : input의 name과 일치시키기 !
app.post("/upload", upload.single("userfile"), (req, res) => {
  console.log(req.file); // 업로드한 파일 정보는 req.file에
  /*   {
    fieldname: 'userfile',      // 폼에 정의한 name
    originalname: 'peach.jpg',  // 사용자가 업로드한 파일명
    encoding: '7bit',           // 파일 인코딩 타입
    mimetype: 'image/jpeg',     // 파일 mime 타입
    destination: 'uploads/',    // 저장 경로
    filename: '5b113f6c8f4e10f15f861086fbaf91a2',       // dest에 저장된 파일명
    path: 'uploads\\5b113f6c8f4e10f15f861086fbaf91a2',  // 업로드된 파일의 전체 경로
    size: 3593                  // 파일크기. byte
  }
 */ console.log(req.body); // 폼에 입력한 정보는 req.body에
  /* 
  { title: '' }     // name이 title인 요소에 입력한 값
  */
  res.send("upload 완료~!!");
});

app.listen(PORT, function () {
  console.log("웹 서버 실행!!");
  console.log(`http://localhost:${PORT}`);
});
