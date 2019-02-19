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
          hobbies: "ultimate frisbee, computer games",
          likes: 0
        },
        {
          name: "Pauli",
          age: 30,
          hobbies: "board games, dancing",
          likes: 0
        }
      ]
    }
  }

  modifyLikes(name, likes) {
    let newWriters = this.state.writers
    for (let i = 0; i < newWriters.length; i++) {
      if (newWriters[i].name === name) {
        newWriters[i].likes = newWriters[i].likes + likes
      }
    }
    this.setState({writers: newWriters})
  }

  renderAboutCard(writer) {
    return(
      <AboutCard
        key={writer.name}
        name={writer.name}
        age={writer.age}
        hobbies={writer.hobbies}
        likes={writer.likes}
        modifyLikes={(name, likes) => this.modifyLikes(name, likes)}
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
            {this.state.writers.map(this.renderAboutCard, this)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
