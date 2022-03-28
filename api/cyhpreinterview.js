var express = require('express');
var router = express.Router();

var normalpage = require('../routes/normal')
var awssql = require('./awssql')

router.use(express.urlencoded({ extended : true}))
// 리액트에서 비동기로 요청시
router.get('/' , (req , res , next) => {
    var sqlsideis = req.query.type; // 리액트 수정
    if(sqlsideis == 'aws'){
        // localhost:3000/cyhpreinterview?type=aws
        req.body.mapper = "IntroduceSql" // mapper namespace로 선정
        req.body.crud = "select" // slect , insert , delete , update
        req.body.mapper_id = "interview" //  sql문 정보를 담고있는 객체의 id

        router.use('/' , awssql)
        next('route') 

    }else{ // 평범한 라우팅은 이쪽으로 오시오.
        // localhost:3000/cyhpreinterview/write
        // localhost:3000/cyhpreinterview
        router.use('/' , normalpage)
        next('route') 
    }
})
module.exports = router;