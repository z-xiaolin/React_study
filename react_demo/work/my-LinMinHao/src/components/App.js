import React, { Component } from 'react';
import logo from '../img/logo.svg';
import L1 from "../img/LiMinHao.jpeg"
import L2 from "../img/LiMinHao2.jpg"
import L3 from "../img/LiMinHao3.jpg"
import L4 from "../img/LiMinHao4.jpg"
import L5 from "../img/timg (2).jpg"
import L6 from "../img/timg (3).jpg"
import L7 from "../img/timg (5).jpg"
import L8 from "../img/timg (7).jpg"
import L9 from "../img/timg(8).jpg"
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Li MinHao's picture-house !</h1>

          <div>
              {/*<img src={logo} className="App-logo" alt="logo" />*/}
              <img src={L1} className="App-logo" alt="logo" />
              <img src={L2} className="App-logo" alt="logo" />
              <img src={L9} className="App-logo" alt="logo" />
              <img src={L3} className="App-logo" alt="logo" />
              <img src={L4} className="App-logo" alt="logo" /> <br/>
              <img src={L5} className="App-logo" alt="logo" />
              <img src={L6} className="App-logo" alt="logo" />
              <img src={L7} className="App-logo" alt="logo" />
              <img src={L8} className="App-logo" alt="logo" />
          </div>
        </header>
        <p className="App-intro">
          欢迎来到 <code>Li MinHao</code> 的图片屋！
        </p>
      </div>
    );
  }
}

export default App;
