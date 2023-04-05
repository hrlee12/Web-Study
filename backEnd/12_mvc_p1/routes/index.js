const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

const app = express();

// router.get("/", controller.main);
app.get("/", controller.main);

// router.post("/login", controller.login);
app.post("/login", controller.login);

module.exports = app;
