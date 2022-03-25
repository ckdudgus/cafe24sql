var express = require('express');
var router = express.Router();

router.get('/' , (req , res , next) => {
    res.send("localhost:3000/cyhpreinterview로 리액트에서 요청해서 이 문자를 보냄")
})

router.post('/write' , (req , res , next) => {
    res.send("localhost:3000/cyhpreinterview/write 로 리액트에서 요청해서 글쓰기 폼태그 보여줄거임")
})
module.exports = router