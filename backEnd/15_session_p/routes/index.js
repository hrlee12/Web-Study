const express = require("express");
const router = express.Router();
const Cuser = require("../controller/Cuser");

router.get("/", Cuser.main);
router.get("/login", Cuser.showLogin);
router.post("/login", Cuser.checkLogin);
router.get("/logout", Cuser.logout);
module.exports = router;
