// import { Route, Routes } from 'react-router-dom';
// import InterviewList from './component/InterviewList';
// import InterviewInsert from './component/InterviewInsert';



import React from 'react';
import Navi from './component/Navi';
import Portfolio from './component/Portfolio'
import Footer from './component/Footer';
import Contact from './component/Contact';
import Quick from './component/Quick';


function App() {
  return (
    <div className='App'>
    <Navi></Navi>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <Footer ></Footer>   
    <Quick></Quick>
    </div>
  );
}

export default App;
