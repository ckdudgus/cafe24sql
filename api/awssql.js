var express = require('express');
var mysql = require('mysql');
var mapper = require('mybatis-mapper')
var dbconfig = require('../db/config.js');

var router = express.Router();
var pool = mysql.createPool(dbconfig);
// mybatis 모듈 가져와서 mapper 정보받아서 query 쿼리문 전달
var query = '';
router.use(express.json())

router.get('/' , (req , res , next) => {
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