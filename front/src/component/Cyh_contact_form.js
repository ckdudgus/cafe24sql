import React from 'react';
import axios from 'axios';
import $ from 'jquery';

export default function Cyh_interview_new(props) {
const submitClick = (type, e) => { 
    // 이 안에 비동기식 있겠구나 , 첫번째 인자 : xml까지 -> sql 선택의 key
    // 두번재 인자는 마우스 피드백
    // 이벤트 리스너 -> 함수 저장 -> 객체의 이벤트에 저장
    // function ccc (){

    // }
    // button.onClick = function(e){ ccc('값') }
    // <buttton onClick = { e=>{ ccc() } }>
    // <button onClick = {ccc}>

    const  fnValidate = (e) =>{ // 유효성 검사
            if(!$('#agreeTerm').is(':checked')){   
                alert("동의하시게나");
                $('label[for="agreeTerm"]').addClass('notice');                 
                return false;
            }
            // if(){
            //     return false;
            // }
            return true; // 제일 아래에 있어야한다.  
                    
            }
        var time = new Date(); 
        
        if(fnValidate()){ // 동의했기때문에 데이터 모아서 이제 비동기로 노드한테 보내야겟다
        
        // 폼필드에 내가 원하는댈 사용자가 데이터를 삽입했음 
        var  jsonstr = decodeURIComponent($("[name='"+props.botable+"']").serialize());           
        var  json_form = JSON.stringify(jsonstr).replace(/\&/g, '\",\"') 
        json_form = "{\""+ json_form.replace(/=/gi, '\":\"') + "\"}"
        // json화시킴 -> 노드
        
        // 노드 -> xml - sql
        try{
            axios({
                url :`/cyhpreinterview?type=${props.botable}`, // 요청 req.body -> 응답 res.send
                header:{
                    "Content-Type" : 'application/json',
                },
                method :"POST",
                body : json_form
            })
            .then(
                (result) => {

                    // select 전용
                    try{
                        console.log(result)

                        // if(){
                        //     alert("인터뷰가 등록되었습니다")
                        // }
                    }
                    catch(err){ console.log("reult 타입 확인할 것 : " + err.message + " / " + typeof result) }  // result가 들어왔는데 try처럼 안왔을때 에러 발생
                }
            )
        }
        catch(err){
            console.log(" 서버통신 문제가 있네 좀있다가 다시 시도해: "+err)
        }
        }
        // e.preventDefault();       
}
  return (
    <div id='formcon'>
         <h2>{ props.titlenm }</h2>
            <form  action=''  method='post' name={props.botable}>
                <div className='formStyle'>
                    <dl>                            
                        <dt><label htmlFor='wr_subject'>인터뷰제목</label></dt>
                        <dd>
                            <input type='text' name='wr_subject' id="wr_subject" required />
                        </dd>
                    </dl>
                    <dl>
                        <dt><label htmlFor="wr_content">인터뷰내용</label></dt>
                        <dd>
                            <textarea rows={5} name="wr_content" id="wr_content"  required >

                            </textarea>
                        </dd>
                    </dl>
                    <div className="agree">
                        <input type="checkbox" id="agreeTerm" />
                        <label htmlFor="agreeTerm"><span>개인정보정책동의</span></label>
                    </div>
                    <a href="#none" onClick={e => { submitClick(props.botable, e) }}  className='btn' > 인터뷰올리기 </a>
                </div>
            </form> 
    </div>
  )
}