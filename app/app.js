"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();




//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extende: true}));

app.use("/", home); //미들웨어를 등록하는 메소드

module.exports = app;