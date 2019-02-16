import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="masthead">My awesome blog</h1>
        <div className="about">
          <h2>About</h2>
          <div className="about-cards">
            <div className="about-card">
              <h3>Johannes</h3>
              <ul>
                <li>Age: 30</li>
                <li>Hobbies: ultimate frisbee, computer games</li>
              </ul>
            </div>
            <div className="about-card">
              <h3>Pauli</h3>
              <ul>
                <li>Age: 30</li>
                <li>Hobbies: computer games, board games, dancing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
