// import React from 'react';
// import Post from './component/Post';
// import Get from './component/Get';
// import Cyh_contact_new from './component/Contact';
import './Form.css';
import Cyh_interview_new from './component/Interview';
import Cyh_contact_from from './component/Cyh_contact_form';

function App() {
  return (
    <div className="App">
      <Cyh_interview_new botable='interviewlist' titlenm='사전인터뷰'></Cyh_interview_new>
      <Cyh_contact_from botable='interviewwrite' titlenm='면접제안'></Cyh_contact_from>
    </div>
  );
}

export default App;
