// import React from 'react';
// import Post from './component/Post';
// import Get from './component/Get';
// import Cyh_contact_new from './component/Contact';
import './App.css';
import './Form.css';
import Cyh_interview_new from './component/Interview';
import Cyh_contact_from from './component/Cyh_contact_form';
import Navi from './component/Navi;'

function App() {
  return (
    <div>
    <Navi></Navi>
    {/* Swiper */}
    <Cyh_interview_new botable='interviewlist' titlenm='사전인터뷰'></Cyh_interview_new>
    {/* 포트폴리오 */}
    <Cyh_contact_from botable='interviewwrite' titlenm='면접제안'></Cyh_contact_from>
    {/* 하단 */}
    </div>
  );
}

export default App;
