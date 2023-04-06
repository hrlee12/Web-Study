const express = require("express");
const router = express.Router();

const controller = require("../controller/Cvisitor");
router.get("/", controller.main);
router.get("/visitor", controller.getVisitors);
router.post("/visitor/write", controller.postVisitor); // 데이터 하나 추가
module.exports = router;
