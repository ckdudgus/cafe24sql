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
                                    <h1 className="hashtag">
                                        <div className='cafe24img' />
                                        <span>Cafe24hosting</span>
                                    </h1>
                                    <div className="content">
                                        <img className='cafeimg' src='img/cafeimg.jpg' alt='바디프랜드' />
                                        <h2>#카페24 #hosting #축구용품 #쇼핑몰</h2>
                                    </div>
                                    <div className="sitebt2">
                                        <a href='https://ksh2012129.cafe24.com' target="_blank">사이트 보러가기</a>
                                    </div>
                                    <div className="grid1img">
                                        <img className='img-fluid' src='img/grid1img.jpg' alt=''/>
                                    </div>
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
                                        <span className='gnuboard'>#부트스트랩</span><span>#반응형웹</span><span>그누보드 연동</span>
                                    </h1>
                                    <div className="sitebt">
                                        <a href='https://ys5328.cafe24.com/bodyfriend' target="_blank">사이트 보러가기</a>
                                    </div>
                                </div>    
                            </div>
                            <div className='gridmy row-6 py-4' >
                                <div className="grid-item3 " >										
                                    <h1 className="hashtag">
                                        <span>반응형 웹앱 페이지</span>
                                    </h1>
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
                                        <span>#긍정적인</span><span>#소통</span><span>#피드백</span><span>#환영</span>
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
                            <div className='grid row-6' >
                                {/* <div className="grid-item4 " >										
                                    <div className='qna text-center'>
                                        <p>FAQ</p>
                                    </div>
                                    <div className="content">
                                        <img src='' alt='바디프랜드' />
                                    </div>
                                </div> */}
                            </div>
                            <div className='gridmy row-6' onClick={this.madalinterview}>
                                <div className="grid-item4 ">										
                                    <div className='qna text-center'>
                                        <p>FAQ</p>
                                    </div>  
                                    <div className="content"></div>
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
            </section>
            
        );
    }
}
export default Portfolio;