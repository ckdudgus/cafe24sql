import React, { Component } from 'react';
class Navi extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-white" id='nav'>
        <div class="container-fluid navco">
          <div class="firsta col-6">
            <a class="navbar-brand "><img className='mainimg' alt='imgmain' src='img/head_img_main.svg'></img></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>  
          <div class="collapse navbar-collapse remaina col-6" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item navi1">
                <a class="nav-link active" aria-current="page" href="#">소개</a>
                <span></span>
              </li>
              <li class="nav-item navi2">
                <a class="nav-link active" href="#">인터뷰</a>
                <span></span>
              </li>
              <li class="nav-item navi3">
                <a class="nav-link active" href="#">사전면접</a>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navi;