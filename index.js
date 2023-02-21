const express = require("express");
const app = express();

app.listen(8000, function(){    //8080포트로 서버를 열어주쇼
    console.log("hi")
});
//익스프레스로 서버 만들기위한 기본 문법


app.get('/beauty', function(req, res) {
    res.send('뷰티용품 쇼핑 페이지임')    
})

app.get('/1', function(req, res) {
    res.send('1page')    
})

app.get('/2', function(req, res) {
    res.send('2page')    
})