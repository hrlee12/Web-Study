// TODO: 컨트롤러 코드
const User = require("../model/user");

exports.main = (req, res) => {
  res.render("index");
};

// 회원가입 페이지 렌더
exports.showSignUp = (req, res) => {
  res.render("signup");
};
exports.createUser = (req, res) => {
  console.log(req.body);
  // 비동기 방식이라 함수가 실행되고 리턴되기까지 기다려 주지 않음.
  // 그래서 리턴되기 전에 컨트롤러 >> result가 먼저 실행되버림.
  // const result = User.createUser(req.body);
  User.createUser(req.body, (result) => {});
};
// 로그인 페이지 렌더
exports.showSignIn = (req, res) => {
  res.render("signin");
};
