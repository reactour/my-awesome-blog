import React, { Component } from 'react';

import AboutCard from './AboutCard'
import { getWriters, updateWriter } from './apiClient'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      writers: []
    }
  }

  componentWillMount() {
    getWriters(this)
  }


  modifyLikes(id, likeModifier) {
    let newWriters = this.state.writers
    let writerToUpdate = false
    for (let i = 0; i < newWriters.length; i++) {
      if (newWriters[i].id === id) {
        newWriters[i].likes = newWriters[i].likes + likeModifier
        writerToUpdate = newWriters[i]
      }
    }
    this.setState({writers: newWriters})
    updateWriter(writerToUpdate)
  }

  renderAboutCard(writer) {
    return(
      <AboutCard
        id={writer.id}
        key={writer.name}
        name={writer.name}
        age={writer.age}
        hobbies={writer.hobbies}
        likes={writer.likes}
        modifyLikes={(id, likeModifier) => this.modifyLikes(id, likeModifier)}
      />
    )
  }

  render() {
    let writers = this.state.writers
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
