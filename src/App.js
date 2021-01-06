import React ,{ Component } from "react";
import logo from './img2.png';
import './img1.jpg';
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <div className="profile-card">
        <div className="top-section">
            <div className="img">
              <img src={logo} width="500" alt="logo"></img>
              <div className="name">Rishav Jaiswal</div>
            </div>
        </div>
        <div className="bottom-section">
            <div className="icon-part">
                <a href="https://www.linkedin.com/in/rishav-jaiswal-28976b17b/" className="icon"><span className="fa fa-linkedin-square" ></span></a>
                <a href="https://github.com/Rishav124-hub" className="icon"><span className="fa fa-github-square" ></span></a>
                <a href="https://twitter.com/RishavJ16408127" className="icon"><span className="fa fa-twitter-square" ></span></a>
                <a href="https://www.instagram.com/rishav_jaiswal_rj/" className="icon"><span className="fa fa-instagram"></span></a>
            </div>
            <div className="content">
                <span className="about">
                    Hello!
                    My name is Rishav Jaiswal.
                    I am B.Tech CSE student of Sanskriti University
                    And also a Full Stack learner with upGrad. 
                    And I have completed a lot of basic projects in web design. 
                    I also completed my Data Science certification course with upGrad.
                </span>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default App;