import React, { Component } from 'react';

import AboutCard from './AboutCard'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      writers: [
        {
          name: "Johannes",
          age: 30,
          hobbies: "ultimate frisbee, computer games"
        },
        {
          name: "Pauli",
          age: 30,
          hobbies: "board games, dancing"
        }
      ]
    }
  }

  renderAboutCard(writer) {
    return(
      <AboutCard
        name={writer.name}
        age={writer.age}
        hobbies={writer.hobbies}
      />
    )
  }

  render() {
    return (
      <div className="App">
        <h1 className="masthead">My awesome blog</h1>
        <div className="about">
          <h2>About</h2>
          <div className="about-cards">
            {this.state.writers.map(this.renderAboutCard)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
