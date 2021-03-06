import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import InterviewList from './InterviewList';
import InterviewInsert from './InterviewInsert';


class Portfolio extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalOnoff : false,
        }
        // this.modalFn = this.modalFn.bind(this)
    }
    
    modalFn=()=>{   
        this.setState((prevState)=>({
            modalOnoff: !prevState.modalOnoff
        }))
    }
    madalinterview=()=>{   
        this.setState((prevState)=>({
            modalOnooff: !prevState.modalOnooff
        }))
    }
    madalcontact=()=>{   
        this.setState((prevState)=>({
            modalOnoooff: !prevState.modalOnoooff
        }))
    }

    componentDidMount() {
        setTimeout(() => {
            AOS.init({
                once : true,
                duration : 800
            })
        }, 600);
      }
    render() {
        return (
            <section id="portfolio" >
                <div id="container">
                    <div className='row cyhpofol'>
                        <div data-aos-delay="100" data-aos="fade-down" className="mainpo col-12 col-md-12 col-lg-3" >
                            <div className="grid row-6"  > 									
                                <div class="grid-item2 " >										
                                    <div className='cafe24img' />
                                    <div className='bootspan text-center'>
                                        <span>Cafe24EChosting</span>
                                    </div>
                                    <div className="content mt-2">
                                        <img className='cafeimg img-fluid' src='img/cafeshop.png' alt='바디프랜드' />
                                    </div>
                                    <div>
                                        <h2><strong>#</strong>카페24 <strong>#</strong>hosting <strong>#</strong>축구용품 <strong>#</strong>쇼핑몰</h2>
                                    </div>
                                    <div className="sitebt2">
                                        <a href='https://ksh2012129.cafe24.com' target="_blank">사이트 보러가기</a>
                                    </div>
                                    {/* <div className="grid1img">
                                        <img className='img-fluid' src='img/grid1img.jpg' alt=''/>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div data-aos-delay="200" data-aos="fade-down" className="mainpo col-12 col-md-12 col-lg-3" >
                            <div className='grid row-6' >
                                <div className="grid-item1" >	
                                    <div className="bootstrap  d-flex ">
                                        <div className="bootlogo"></div>
                                        <div className='sir' alt='그누보드'></div>
                                        <div className='bootspan'>
                                            <span>부트스트랩_바디프랜드</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className='bodyfriend' alt='바디프랜드' />
                                    </div>
                                    <h1 className="hashtag">
                                        <h2 className='gnuboard'><strong>#</strong>부트스트랩 <strong>#</strong>반응형웹 <strong>#</strong>그누보드 연동</h2>
                                    </h1>
                                    <div className="sitebt">
                                        <a href='https://ys5328.cafe24.com/bodyfriend' target="_blank">사이트 보러가기</a>
                                    </div>
                                </div>    
                            </div>
                            <div className='gridmy row-6 py-4' >
                                <div className="grid-item3 " >										
                                    <div className="hashtag">
                                        <span>반응형 웹앱 페이지</span>
                                    </div>
                                    <div className="content">
                                        <img className='img-fluid' src='img/publishe.png' alt='' />
                                    </div>
                                    <div className="sitebt">
                                        <a href='https://ys5328.cafe24.com/publishe' target="_blank">사이트 보러가기</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos-delay="300" data-aos="fade-down" className="mainpo col-12 col-md-12 col-lg-3" >
                            <div className='grid row-6' >
                                <div className="grid-item " >										
                                    <div className="content">
                                        <div className='youngimg' onClick={this.modalFn}/>
                                    </div>
                                    <h3 className="hashtag1">
                                        <span><strong>#</strong>긍정적인</span><span><strong>#</strong>소통</span><span><strong>#</strong>피드백</span><span><strong>#</strong>환영</span>
                                    </h3>
                                    <div className="young_txt">
                                    <strong>Front-End Developer 차영현</strong>입니다. 좋아하는 것을 직업으로 삼고 잘하기 위해 끊임없이 노력하며, 빠른 변화를 두려워하지 않고 준비된 자세로 나아가고 있습니다.
                                    많은 사람들과 소통하고 긍적적인 에너지를 주는 개발자로 성장하고 싶습니다.
                                    </div>
                                    <div className="young_link text-center" onClick="event.stopPropagation()">
                                        <a href="https://www.naver.com" target="_blank"><img src="/img/Tstroy.jpg" alt="" onClick="baby" /></a>
                                        <a className='instagram' href="https://www.instagram.com" target="_blank"><img src="/img/instagram.png" alt="" onClick="baby" /></a>
                                        <a href="https://github.com" target="_blank"><img src="/img/git.png" alt="" onClick="baby" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos-delay="400" data-aos="fade-down" className="mainpo col-12 col-md-12 col-lg-3">
                            <div className='gridmy row-6' >
                                <div className="grid-item4" onClick={this.madalinterview}>										
                                    <div className='qna text-center'>
                                        <p className='mb-0'><strong>FAQ</strong></p>
                                    </div>  
                                </div>
                            </div>
                            <div className='gridmy row-6'>
                                <div className="grid-item4 mt-5" onClick={this.madalcontact}>										
                                    <div className='qna text-center'>
                                        <p className='mb-0'><strong>Contact Me</strong></p>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.modalOnoff ?
                <div id="modalbox" className='modalbox'>
                    <div className="modalsub">
                        <div className="modal fade show" id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-modal="true" role="dialog">
                            <div className='black'></div>
                            <div className="modal-dialog modal-xl" >
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className='container'>
                                                <div className='top'>
                                                    <button type="button" class="btn-close btnx" data-bs-dismiss="modal" aria-label="Close" onClick={this.modalFn}></button>
                                                </div>
                                            <div className='aboutme col-lg-12 d-flex flex-wrap'>
                                                <div className='about col-lg-4'>
                                                    <img data-aos-delay="100" data-aos="fade-down-right" src='/img/about3.JPG'></img>
                                                </div>
                                                <div className='about col-lg-4'>
                                                    <img data-aos-delay="200" data-aos="fade-down" src='/img/about4.JPG'></img>
                                                </div>
                                                <div className='about col-lg-4'>
                                                    <img data-aos-delay="300" data-aos="fade-down-left" src='/img/about5.JPG'></img>
                                                </div>

                                                <div className='about col-lg-4 '>
                                                    <img data-aos-delay="800" data-aos="fade-right" src='/img/aboutimg1.JPG'></img>
                                                </div>
                                                <div className='aboutcenter about col-lg-4'>
                                                    <div className='abouttext'>
                                                        <span>
                                                        "새로운 분야에 도전하는 만큼 많은 사람들과 소통하고
                                                        흐름과 트랜드를 파악하여 끊임없이 연구하고 공부하겠습니다."
                                                        </span>
                                                    </div>
                                                    <div className='resume'>
                                                        <a href="https://www.saramin.co.kr/zf_user/member/resume/view/edit_icon_fl/y/res_idx/20577940/mandb_view/n" target='_blank'>
                                                        <img className='resumeimg' src='/img/resume1.png' alt='이력서'></img>                                                    
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className='about col-lg-4 '>
                                                    <img data-aos-delay="400" data-aos="fade-left" src='/img/aboutimg1.JPG'></img>
                                                </div>

                                                <div className='about col-lg-4'>
                                                    <img data-aos-delay="700" data-aos="fade-up-right" src='/img/aboutimg1.JPG'></img>
                                                </div>
                                                <div className='about col-lg-4 '>
                                                    <img data-aos-delay="600" data-aos="fade-up" src='/img/aboutimg1.JPG'></img>
                                                </div>
                                                <div className='about col-lg-4 '>
                                                    <img data-aos-delay="500" data-aos="fade-up-left" src='/img/about2.JPG'></img>
                                                </div>
                                            </div>
                                            <div className="row col-12">
                                                <div className='intro'>
                                                    <p><strong>Skills</strong></p>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="progress_bar dark">
                                                        <div className="progress_bar_title">React</div>
                                                        <div className="progress_number">70%</div>
                                                        <div className="pro-bar">
                                                            <div className="progress-bar-inner"  data-score="80"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="progress_bar dark">
                                                        <div className="progress_bar_title">HTML5 & css</div>
                                                        <div className="progress_number">70%</div>
                                                        <div className="pro-bar">
                                                            <div className="progress-bar-inner"  data-score="60"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="progress_bar dark">
                                                        <div className="progress_bar_title">Js & jQuery</div>
                                                        <div className="progress_number">60%</div>
                                                        <div className="pro-bar">
                                                            <div className="progress-bar-inner"  data-score="60"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="progress_bar dark">
                                                        <div className="progress_bar_title">Node & Mysql</div>
                                                        <div className="progress_number">70%</div>
                                                        <div className="pro-bar">
                                                            <div className="progress-bar-inner"  data-score="60"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="progress_bar dark">
                                                        <div className="progress_bar_title">Photoshop & Illustrator</div>
                                                        <div className="progress_number">80%</div>
                                                        <div className="pro-bar">
                                                            <div className="progress-bar-inner"  data-score="60"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="progress_bar dark">
                                                        <div className="progress_bar_title">Figma</div>
                                                        <div className="progress_number">80%</div>
                                                        <div className="pro-bar">
                                                            <div className="progress-bar-inner"  data-score="60"></div>
                                                        </div>
                                                    </div>
                                                </div>                                               
                                            </div>
                                            <div className="row col-12 aboutend">                                               
                                                <div className='d-flex'>
                                                    <div className="row Privacy col-sm-6">
                                                        <h2>PRIVACY</h2>
                                                        <span>차영현</span>
                                                        <span>ksh2012129@naver.com</span>
                                                        <span>1999.09.23</span>
                                                        <span>010.9187.8074</span>
                                                    </div>
                                                    <div className='row certificate col-sm-6'>
                                                        <h2>CERTIFICATE</h2>
                                                        <span>GTQ 그래픽기술자격 1급</span>
                                                        <span>웹디자인 기능사</span>
                                                        <span>구글 애널리틱스</span>
                                                        <span>운전면허 1급</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                : ''}
                {this.state.modalOnooff ?
                <div id="modalbox" className='modalbox'>
                    <div className="modalsub">
                        <div className="modal fade show" id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-modal="true" role="dialog">
                            <div className='black'></div>
                            <div className="modal-dialog modal-xl" >
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className='top'>
                                            <button type="button" class="btn-close btnx" data-bs-dismiss="modal" aria-label="Close" onClick={this.madalinterview}></button>
                                        </div>
                                        <div className='container'>
                                        <InterviewList dbinfo={ {         
                                            titlenm : 'FAQ', 
                                            botable : 'interviewList',
                                            crud : 'select',
                                            mapper : 'introduceSQL',
                                            mapperid : 'interviewList'
                                                }
                                                }>
                                         </InterviewList>                                          
                                        <Routes>
                                            <Route path='/' element={<InterviewInsert dbinfo={ {         
                                                titlenm : '인터뷰(아마존 AWS DB연동)', 
                                                botable : 'interviewWrite',
                                                crud : 'insert',
                                                mapper : 'introduceSQL',
                                                mapperid : 'interviewInsert'
                                                }
                                                }></InterviewInsert>}></Route>   
                                            <Route path='/interviewModify:no' element={<InterviewInsert dbinfo={ {         
                                                titlenm : '수정시 주소의 no변수필수 : 아마존 폼태그 글쓰기와 동일한 컴포넌트를 사용한다.', 
                                                botable : 'interviewModify',
                                                crud : 'modify',
                                                mapper : 'introduceSQL',
                                                mapperid : 'interviewModify'
                                                }
                                                }></InterviewInsert>}></Route>                           
                                        </Routes>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                : ''}
                {this.state.modalOnoooff ?
                <div data-aos-delay="100" data-aos="zoom-in" id="maincontact">
                    <div className="contacttitle">
                        <h><strong>Contact Me</strong></h>
                    </div>
                    <div className="subtitle">
                        <h>for the culture not for benefit</h>
                    </div>
                    <div className="formmain">
                        <form action="http://www.naver.com"  onsubmit="return forminspector(this)" method="post" name="contactform" id="contactform">
                            <ul className='formlabel'>
                                <li className="labeltext">
                                    <label for="companynm" className="first_label">회사명</label>
                                    <input id="companynm" type="text" name="companynm" />
                                </li>
                                <li className="labeltext">
                                    <label for="companymynm" className="first_label">성함</label>
                                    <input id="companymynm" type="text" name="companymynm" />
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
                                    <label for="etc">메세지</label>
                                    <textarea name="etc" id="etc" cols="30" rows="10" placeholder="메세지를 남겨주세요"></textarea>
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
                : ''}
            </section>
            
        );
    }
}
export default Portfolio;