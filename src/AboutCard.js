import React, { Component }  from 'react';

class AboutCard extends Component {
  constructor() {
    super()
    this.state = {
      likes: 0
    }
  }

  modifyLikes(amount) {
    let newLikes = this.state.likes + amount
    this.setState({likes: newLikes})
  }

  render () {
    return (
      <div className="about-card">
        <h3>{this.props.name}</h3>
        <ul>
          <li>Age: {this.props.age}</li>
          <li>Hobbies: {this.props.hobbies}</li>
        </ul>
        <div className="likes-wrapper">
          <div className="likes">
            {this.state.likes}
          </div>
          <button className="btn" onClick={() => this.modifyLikes(1)}>
            +
          </button>
          <button className="btn" onClick={() => this.modifyLikes(-1)}>
            -
          </button>
        </div>
      </div>
    )
  }
}

export default AboutCard
