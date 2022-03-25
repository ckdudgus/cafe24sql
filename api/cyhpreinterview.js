var express = require('express');
var router = express.Router();

router.use(express.urlencoded({ extended : true}))
// 리액트에서 비동기로 요청시
router.get('/' , (req , res , next) => {
    var sqlsideis = req.query.type; 
    if(sqlsideis == 'aws'){
    // localhost:3000/cyhpreinterview?type=aws
        var mysql = require('mysql');
        var dbconfig = require('../db/config.js');
        var pool = mysql.createPool(dbconfig);

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

    }else{ // 평범한 라우팅은 이쪽으로 오시오.

    }
    
})
module.exports = router;