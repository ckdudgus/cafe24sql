// var express = require('express');
// var router = express.Router();

// var normalpage = require('../routes/normal')
// var awssql = require('./awssql')

// router.use(express.urlencoded({ extended : true}))
// // 리액트에서 비동기로 요청시
// router.post('/' , (req , res , next) => {
//     var type = req.query.type; // 리액트 수정

//     //list , write , drop , modify -> switch or if elseif
//     if(type == 'list'){ // localhost:3000/cyhpreinterview?type=list
        
//         req.body.mapper = "IntroduceSql" // mapper namespace로 선정
//         req.body.crud = "select" // slect , insert , delete , update
//         req.body.mapper_id = "interview" //  sql문 정보를 담고있는 객체의 id

//         router.use('/' , awssql)
//         next('route') 
    
//     }else if(type == 'write'){  // localhost:3000/cyhpreinterview?type=write

//         req.body.mapper = "IntroduceSql" // mapper namespace로 선정
//         req.body.crud = "insert" // slect , insert , delete , update
//         req.body.mapper_id = "interviewInsert" //  sql문 정보를 담고있는 객체의 id

//     }
//     else{ // 평범한 라우팅은 이쪽으로 오시오.
//         // localhost:3000/cyhpreinterview/write
//         // localhost:3000/cyhpreinterview
//         router.use('/' , normalpage)
//         next('route') 
//     }
// })
// module.exports = router;


var express = require('express')
var router = express.Router();

var normalpage = require('../routes/normal')
var awssql = require('./awssql')


router.use(express.urlencoded({ extended : true }))

router.post('/', (req, res, next) =>{   
   var type = req.query.type;  //  ?type=botable
   var routenm = normalpage
   req.body.mapper = "IntroduceSql";     
      switch(type){
         // 사전인터뷰 글보기 , 글쓰기 , 글수정
         case 'interviewlist' : req.body.crud = "select"; 
                     req.body.mapper_id = "interview";
                     routenm = awssql
                     break;
         case 'interviewwrite': req.body.crud = "insert"; 
                     req.body.mapper_id = "interviewwrite";
                     routenm = awssql
                     break;
         case 'interviewmodify': req.body.crud = "update"; 
                     req.body.mapper_id = "interviewModify";
                     routenm = awssql
                     break;
         case 'interviewdelete': req.body.crud = "delete"; 
                     req.body.mapper_id = "interviewdelete";
                     routenm = awssql
                     break;            
         // 면접제안 글보기 , 글쓰기
         case 'meetinglist': req.body.crud = "select"; 
                     req.body.mapper_id = "meetingArrange";
                     routenm = awssql
                     break;
         case 'meetingwrite': req.body.crud = "insert"; 
                     req.body.mapper_id = "meetingArrangeInsert";
                     routenm = awssql
                     break;              
         default      : routenm = awssql
                     break; 
         // 포트폴리오
         case 'portfoliolist' : req.body.crud = "select";
                     req.body.mapper_id = "portfolio"
                     routenm = awssql
                     break;
         case 'portfoliowrite' : req.body.crud = "insert";
                     req.body.mapper_id = "portfoliowrite"
                     routenm = awssql
                     break;
         case 'portfoliomodify' : req.body.crud = "update";
                     req.body.mapper_id = "portfoliomodift"
                     routenm = awssql
                     break;
         case 'portfoliodelete' : req.body.crud = "delete";
                     req.body.mapper_id = "portfoliodelete"
                     routenm = awssql
                     break;
      }      
          router.use('/', routenm )
          next('route')
})

module.exports = router;