import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section>
                <div data-aos-delay="100" data-aos="zoom-in" id="maincontact">
                    <div className="contacttitle">
                        <h><strong>Contact Me</strong></h>
                    </div>
                    <div className="subtitle">
                        <h>for the culture not for benefit</h>
                    </div>
                    <div className="formmain">
                        {/* <div className="contactimg">
                            <img src="/front/폼태그/img/Untitled-1.jpg" alt="www" className="imgmain" />
                        </div> */}
                        <form action="http://www.naver.com"  onsubmit="return forminspector(this)" method="post" name="contactform" id="contactform">
                            <ul className='formlabel'>
                                <li className="labeltext">
                                    <label for="companynm" className="first_label">회사명</label>
                                    <input id="companynm" type="text" name="companynm" />
                                </li>
                                <li className="labeltext">
                                    <label for="contactph" className="first_label">담당자 연락처</label>
                                    <input id="phonenumber" type="text" name="phonenumber"  placeholder="010-0000-0000" />
                                </li>               
                                {/* <li className="potext">
                                    
                                </li> */}
                                <li>
                                    <div className="title"><strong>포지션</strong><span>(하나만 선택해주세요)</span></div>
                                    <ul className="position">
                                        <li>
                                            <input type="radio" name="position" id="position1" />
                                            <label for="position1">프론트엔드</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="position" id="position2" />
                                            <label for="position2">웹퍼블리셔</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="position" id="position3" />
                                            <label for="position3">디자인</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="position" id="position4" />
                                            <label for="position4">기획자</label>
                                        </li>
                                    </ul>    
                                    <label for="etc">추가메세지</label>
                                    <textarea name="etc" id="etc" cols="30" rows="10"></textarea>
                                </li>

                                <li  className="Agreetext">
                                    <label className="checkbox" for="allCheck">
                                        <input type="checkbox" name="agree" className="checkAll" data-group="cg1" id="allCheck" />
                                        <i></i>
                                        <span>개인정보 수집이용 동의</span>
                                    </label>
                                </li>
                            </ul>
                            <div className="form-submit-btn">
                                <input className="submit" type="submit" value="제안하기" />
                            </div>
                        </form>
                    </div>

                </div>
            </section>    
        );
    }
}

export default Contact;