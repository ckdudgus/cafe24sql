var express = require('express');
var mysql = require('mysql');
var mybatisMapper = require('mybatis-mapper')
var dbconfig = require('../db/cafe24.js');

var router = express.Router();
var pool = mysql.createPool(dbconfig);
// mybatis 모듈 가져와서 mapper 정보받아서 query 쿼리문 전달

router.use(express.json())
// rea.body -> json
// node의 main을 기준으로 경로 계산해야함!!
// req.body 정보를 풀어서 써야해서

mybatisMapper.createMapper(['./mapper/introduce.xml']);
// 드뎌 xml 가져올
var format = { language : 'sql', indent : '  '}

router.post('/' , (req , res) => {
    var params = req.body;
    var query = mybatisMapper.getStatement(
    params.mapper, params.mapper_id, params, format );
    // sql문 추출해서 query에 담기    

    pool.getConnection(function(err , connection) {    

        if(err) console.log("DB접속불가 : "+err);

        connection.query(
            query, // 이거는 반드시 sql문이 들어와야 에러가 안남
            (error , result) => {
                if(error) throw error; // resilt를 받지 못하는 상황 
                
                if(req.body.crud == 'select')
                    res.send(result); // result한테 res.data를 주라.

                res.send('successe'); // react한테 successefk라는 문자를 주라.
            })
        connection.release(); // 추가 구절
    })
})


module.exports = router