// mysql 라이브러리 사용한 방식을
// sequelize(ORM 라이브러리)사용해서 바꾸기.

// ORM 라이브러란?
// 자바스크립트 구문으로 데이터베이스를 다룰 수 있게 해준다.
// object-relation mapping

// [before]
// const User = require("../model/User");
const models = require("../models");

// 회원가입 페이지 렌더
exports.showSignUp = (req, res) => {
  res.render("signup");
};
exports.createUser = async (req, res) => {
  console.log(req.body);
  // [before]
  // 비동기 방식이라 함수가 실행되고 리턴되기까지 기다려 주지 않음.
  // 그래서 리턴되기 전에 컨트롤러 >> result가 먼저 실행되버림.
  // const result = User.createUser(req.body);
  // User.createUser(req.body, () => {
  //   // res.end() 데이터 없이 응답할 때 사용
  //   res.end();
  // });

  // [after]
  const result = await models.User.create({
    id: req.body.id,
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  });
  console.log(result);
  res.end();
};

exports.showSignIn = (req, res) => {
  res.render("signin");
};

exports.checkAccount = async (req, res) => {
  console.log(req.body);
  /*   [before]
  User.checkAccount(req.body, (result) => {
    console.log("컨트롤러 checkAccount >>> ", result);

    // 해당하는 튜플 있으면 [{}]  없으면 빈 배열
    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
 */
  //[after];
  const result = await models.User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  });
  console.log("checkAccount >>> ", result);

  // mysql로는 해당하는 튜플이 없으면 빈 리스트를 반환하지만
  // suquelize는 해당하는 튜플이 없으면 null 반환. 있으면 오브젝트로 반환.
  if (result) {
    res.send(true);
  } else {
    res.send(false);
  }
};

exports.showProfile = async (req, res) => {
  console.log(req.body);
  // [before]
  // User.showProfile(req.body.userid, (result) => {
  //   console.log("컨트롤러 showProfile >>> ", result); // [{}]
  //   if (result.length > 0) {
  //     res.render("profile", { data: result[0] });
  //   }
  // });

  // [after]
  const result = await models.User.findOne({
    where: { userid: req.body.userid },
  });
  console.log("showProfile >>> ", result);
  if (result) {
    res.render("profile", { data: result });
  }
};

exports.deleteAccount = async (req, res) => {
  console.log(req.body);
  // [before]
  // User.deleteAccount(req.body.id, () => {
  //   res.end();
  // });

  // [after]
  await models.User.destroy({ where: { userid: req.body.id } });
  res.end();
};

exports.editAccount = (req, res) => {
  console.log(req.body);
  // [before]
  // User.editAccount(req.body, () => {
  //   res.end();
  // });

  // [after]
  models.User.update(
    { pw: req.body.pw, name: req.body.name },
    { where: { id: req.body.id } }
  );
  res.end();
};
