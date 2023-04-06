// const express = require("express");
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

const AccountInf = require("../model/AccountInf");

exports.main = (req, res) => {
  res.render("index");
};

// body를 읽을 수 있게 안 했음.
exports.login = (req, res) => {
  console.log(req.body);
  let userInf = AccountInf.users;
  userInf = userInf.split("\n");
  const users = [];
  const userIds = [];
  for (let i = 0; i < userInf.length; i++) {
    users.push({
      userId: userInf[i].split("//")[0],
      userPw: userInf[i].split("//")[1],
      userName: userInf[i].split("//")[2],
    });

    userIds.push(userInf[i].split("//")[0]);
  }
  console.log(users);

  const idx = userIds.indexOf(req.body.id);

  if (idx >= 0) {
    if (users[idx].userPw === req.body.pw) {
      res.send({ success: true, userName: users[idx].userName });
    } else {
      res.send({ success: false, existData: true, correctId: true });
    }
  } else if (req.body.id && req.body.pw) {
    res.send({ success: false, existData: true, correctId: false });
  } else {
    res.send({ success: false, existData: false });
  }

  /*   for (let i = 0; i < userInf.length; i++) {
    if (req.body.id == users[i].userId && req.body.pw == users[i].userPw) {
      res.send({ userName: users[i].userName, success: true });
      return;
    }
  }

  if (req.body.id && req.body.pw) {
    res.send({ success: false, existData: true });
  } else {
    res.send({ success: false, existData: false });
  }
 */
};
