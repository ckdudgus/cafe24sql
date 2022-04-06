import React, { Component } from 'react';

class Navi extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id='nav'>
        <div class="container-fluid">
          <div class="firsta col-6">
            <a class="navbar-brand " href="#">YoungPortfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>  
          <div class="collapse navbar-collapse remaina col-6" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">ABILITY</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">PORTFOLIO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navi;