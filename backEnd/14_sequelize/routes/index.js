const express = require("express");
const router = express.Router();

const controller = require("../controller/Cvisitor");
router.get("/", controller.main);
router.get("/visitor", controller.getVisitors);
router.post("/visitor/write", controller.postVisitor); // 데이터 하나 추가

// DELETE /visitor/delete
router.delete("/visitor/delete", controller.deleteVisitor);

// GET / visitor/get
router.get("/visitor/get", controller.getVisitor); // 하나 조회

// PATCH /visitor/edit
router.patch("/visitor/edit", controller.patchVisitor); // 하나 수정

module.exports = router;
