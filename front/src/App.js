// import React from 'react';
// import Post from './component/Post';
// import Get from './component/Get';
// import Cyh_contact_new from './component/Contact';


import Navibar from './component/Navibar';
import Navi from './component/Navi';
import Portfolio from './component/Portfolio'
// import Header from './component/Header';
// import Ability from './component/Ability'
// import Cyh_interview_new from './component/Interview';
// import Cyh_contact_from from './component/Cyh_contact_form';
import Footer from './component/Footer';
import Quick from './component/Quick';


function App() {
  return (
    <div className='App'>
    {/* <Header styletype='d1'></Header> */}
    <Navibar></Navibar>
    <Navi styletype='d1'></Navi>
    <Portfolio></Portfolio>
    {/* <Cyh_interview_new botable='interviewlist' titlenm='사전인터뷰'></Cyh_interview_new>
    <Cyh_contact_from botable='interviewwrite' titlenm='면접제안'></Cyh_contact_from> */}

    <Footer styletype='family'></Footer>   
    {/* Footer -> 실행문 familiy -> 매개인자  */}
    <Quick></Quick>
    </div>
  );
}

export default App;
