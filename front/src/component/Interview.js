import React, { useEffect, useState } from 'react';
import axios from 'axios';
import $ from 'jquery';

const Interview = (props) => {
    // 함수형 컴포넌트에서는 this 주의할것
    let [interviewId , interviewIDUpdate] = useState([]);
    const [typeData , insertDB] = useState(0);

    const interviewDataSetting = async () => {
        axios(
                {
                    url : `/cyhpreinterview?type=${props.botable}`,
                    method : 'POST'
                }
        ) 
        .then(
                (result) => {

                    // select 전용
                    try{
                        interviewIDUpdate([...result.data])
                        insertDB(result.data[ result.data.length -1].key_id);
                    }
                    catch(err){ console.log("reult 타입 확인할 것 : " + err.message + " / " + typeof result) }  // result가 들어왔는데 try처럼 안왔을때 에러 발생
                }
            )
        .catch ( e => { console.log(e +'이유로 통신이 불안전함') }  // json형태로 안오고 다른 type이 왔을때 통신 에러 -> 서버 쪽 일 생김                      
        )
    }

    useEffect( () => { interviewDataSetting(); } , [typeData] ) // typeDate가 없이 변할때 재랜더링해라.


    const submitClick = async (type, e) => {

        const fnValidate = (e) => {
            // 여기서 유효성검사
            // 필드에 값이 맞지않거나
            return true;
        }
        if(fnValidate()){

            var jsonstr = decodeURIComponent($("[name='interviewwrite']").serialize()); // -> 네임=값&네임=값
                
            alert("1."+jsonstr);
            var json_form = JSON.stringify(jsonstr).replace(/\&/g, '\",\"') // -> 네임=값","네임=값
            alert("2."+json_form);
            json_form = "{"+ json_form.replace(/=/gi, '\":\"') + "}" // -> { 네임"값:"값","네임":"값 }
            alert("3.데이터를 한번에  json문법화됨 serialize() 안쓰면 일일이 담아야 함 "+json_form);

          e.preventDefault(); //react에서는 폼태그 전송 막기 위해서는 return false 가 아니다.

        }
    }
    return (
        <div id='formin'>
            {/* length -> Array */}
            <h2>{ interviewId.length > 0 ? props.titlenm : "데이터전송중..."}</h2>   
        {
            interviewId.map((contant,i) => {
                return(
                    <li key={contant.key_id}>
                        <h3>{i+1} { contant.cyh_subject }</h3><div>{ contant.cyh_content }</div>
                    </li>
                )
            })
        }
        <h2>인터뷰글 올리기</h2>
            <form  action='' onSubmit={ e => { submitClick("interviewwrite", e); }}  method='post' name="interviewwrite">
                <div className='formStyle'>
                    <dl>
                        <dt>인터뷰제목</dt>
                        <dd>
                            <input type='text' name='cyh_subject' />
                        </dd>
                    </dl>
                    <dl>
                        <dt>인터뷰내용</dt>
                        <dd>
                            <textarea rows={5} name="cyh_content">

                            </textarea>
                        </dd>
                    </dl>
                    <button className='btn'> 인터뷰올리기 </button>

                </div>
            </form>
        </div>
    );
}
export default Interview;

