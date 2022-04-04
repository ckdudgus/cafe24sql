var express = require('express');
var app = express();

// var postsend = require('./api/postsend')
// var getsend = require('./api/getsend')
// var sqlreqres = require('./api/introduce')

// app.use('/postsend' , postsend) 
// app.use('/getsend' , getsend)
// app.use('/sqlreares' , sqlreqres)

var cyhpreinterview = require('./api/cyhpreinterview') // api 폴더는 중간역활
app.use('/cyhpreinterview' ,cyhpreinterview)

app.set('port' , 8080)
app.post('/' , (req , res) => {
    res.send(' / 루트');
})
app.listen(app.get('port'), () => {
    console.log('콘솔확인')
})

// 노드의 역활은 서버 / 즉 데이터와 연동하지않을 데이터는 리액트 컴포넌트로 표현
// 나머지 불필요한 라우터삭제


