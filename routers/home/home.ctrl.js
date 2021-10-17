"use strict";

const home = (req, res) =>{
  res.render("home/index");
};

const login = (req, res) =>{
  res.render("home/login");
};

module.exports = {
  home,
  login,
};

//이크마스크립트
