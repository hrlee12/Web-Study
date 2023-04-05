const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 폴더까지만 접근할 경우, 자동으로 index.js파일을 찾아감.
// 파일이름이 index.js 인 경우에만 생략가능 !!
const indexRouter = require("./routes");

// 모든 라우터는 /로 시작함.
// 즉, '/~~' 모든 라우터를 indexRouter에 정의했으니
// 거길 보면 된다는 의미 !!
app.use("/", indexRouter);

// app.use로 여러개 라우트 설정할 거임.
// *는 app.js 마지막에 넣기.
// [404 error]
// 맨 마지막 라우트로 선언: nor 나머지 코드 무시되기 때문!!
app.get("*", (req, res) => {
  // res.send('404 Error! 잘못된 주소 형식입니다.');
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
