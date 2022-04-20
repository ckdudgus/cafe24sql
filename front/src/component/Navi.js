import React, { Component } from 'react';
class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div id='navi'>
        <nav className ="header navbar navbar-expand-md navbar-light bg-faded">
          <div className=" cyhlogo">
            <a className="mr-auto navbar-brand" href="http://localhost:3000/"><div className='img' /></a>
            {/* <div className="collapse navbar-collapse">
              <ul className="navmenu ml-sm-auto navbar-nav">   
                <li className="nav-item"><p>소개</p></li>
                <li className="nav-item"><p>인터뷰</p></li>
                <li className="nav-item"><p>면접제안</p></li>
              </ul>
            </div> */}
          </div>
        </nav>
      </div>
    );
  }
}
export default Navi;

