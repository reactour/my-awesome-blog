import React, { Component } from 'react';

import AboutCard from './AboutCard'
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
            <AboutCard
              name="Johannes"
              age={30}
              hobbies="ultimate frisbee, computer games"
            />
            <AboutFriend />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
