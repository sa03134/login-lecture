"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

module.exports = router;
// 꼭 모듈로 밖으로 빼줘야 함.