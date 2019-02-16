import React, { Component } from 'react';

import AboutMe from './AboutMe'
import AboutFriend from './AboutFriend'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="masthead">My awesome blog</h1>
        <div className="about">
          <h2>About</h2>
          <div className="about-cards">
            <AboutMe />
            <AboutFriend />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
