// TODO: 컨트롤러 코드
const User = require("../model/User");

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
  User.createUser(req.body, () => {
    // res.end() 데이터 없이 응답할 때 사용
    res.end();
  });
};

exports.showSignIn = (req, res) => {
  res.render("signin");
};

exports.checkAccount = (req, res) => {
  console.log(req.body);
  User.checkAccount(req.body, (result) => {
    console.log("컨트롤러 checkAccount >>> ", result);

    // 해당하는 튜플 있으면 [{}]  없으면 빈 배열
    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

exports.showProfile = (req, res) => {
  console.log(req.body);

  User.showProfile(req.body.userid, (result) => {
    console.log("컨트롤러 showProfile >>> ", result); // [{}]
    if (result.length > 0) {
      res.render("profile", { data: result[0] });
    }
  });
};

exports.deleteAccount = (req, res) => {
  console.log(req.body);

  User.deleteAccount(req.body.id, () => {
    res.end();
  });
};

exports.editAccount = (req, res) => {
  console.log(req.body);

  User.editAccount(req.body, () => {
    res.end();
  });
};
