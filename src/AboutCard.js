import React, { Component }  from 'react';

class AboutCard extends Component {
  render () {
    return (
      <div className="about-card">
        <h3>{this.props.name}</h3>
        <ul>
          <li>Age: {this.props.age}</li>
          <li>Hobbies: {this.props.hobbies}</li>
        </ul>
      </div>
    )
  }
}

export default AboutCard
