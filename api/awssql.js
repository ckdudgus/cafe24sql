var express = require('express');
var mysql = require('mysql');
var mybatisMapper = require('mybatis-mapper')
var dbconfig = require('../db/config.js');

var router = express.Router();
var pool = mysql.createPool(dbconfig);
// mybatis 모듈 가져와서 mapper 정보받아서 query 쿼리문 전달
var query = '';
router.use(express.json())
// node의 main을 기준으로 경로 계산해야함!!
// req.body 정보를 풀어서 써야해서

mybatisMapper.createMapper(['./mapper/introduce.xml']);
// 드뎌 xml 가져올
var format = { language : 'sql', indent : '  '}

router.get('/' , (req , res , next) => {
    var params = req.body;
    // req.body.mapper = "IntroduceSql"  mapper namespace로 선정
    // req.body.crud = "select" slect , insert , delete , update
    // req.body.mapper_id = "interview"   sql문 정보를 담고있는 객체의 id
    var query = mybatisMapper.getStatement(
    params.mapper, params.mapper_id, params, format );
    pool.getConnection(function(err , connection) {    
        connection.query(
            query,
            (error , result) => {
                if(error) throw error;
                console.log(result);
                res.send(result);
            })
        connection.release(); // 추가 구절
    })
})


module.exports = router