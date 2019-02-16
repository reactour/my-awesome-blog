import React, { Component }  from 'react';

class AboutMe extends Component {
  render () {
    let name = "Johannes"
    let age = 31
    let hobbies = "ultimate frisbee, computer games"

    return (
      <div className="about-card">
        <h3>{name}</h3>
        <ul>
          <li>Age: {age}</li>
          <li>Hobbies: {hobbies}</li>
        </ul>
      </div>
    )
  }
}

export default AboutMe
