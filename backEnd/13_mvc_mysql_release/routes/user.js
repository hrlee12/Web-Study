// TODO: 라우트 설정
const express = require("express");
const router = express.Router();
const Cuser = require("../controller/Cuser");

router.get("/", Cuser.main);

router.get("/signup", Cuser.showSignUp);

router.post("/signup", Cuser.createUser);

router.get("/signin", Cuser.showSignIn);

/*

router.post('/user/signin', Cuser.checkSignIn);

router.post('/user/profile', Cuser.successSignIN);
router.
 */

module.exports = router;