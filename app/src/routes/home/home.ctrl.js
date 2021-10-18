"use strict";


const output = {

  
  home : (req, res) =>{
    res.render("home/index");
  }, //단순히 해당 페이지를 렌더링 해주는 기능

  login : (req, res) =>{
    res.render("home/login");
  }

};


const users = {
  id : ["qwer", "나개발", "김팀장"],
  psword: ["1234","1234","123456"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const psword = req.body.psword;

    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword){
        return res.json({
          success: true,
        });
      }
    }
    
    return res.json({
      success: false,
      msg: "로그인에 실패하였습니다.",
    });
  },
};


module.exports = {
  output,
  process,
};

//이크마스크립트
