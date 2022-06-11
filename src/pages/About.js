import React, { Component } from 'react';
import ananya from "./assets/IMG_3127.jpg"; 
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            // Image goes here
            src = {ananya}
            alt="Profile Pic"
            height="300"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Ananya Barman</div>
          <div className="brief_description">
            Hello! My name is Ananya Barman and I am a rising sophomore at the University of Illinois at Urbana-Champaign studying computer science. In the future, I hope to go into software engineering and/or product management. Outside of CS, I enjoy reading, cooking, and travelling. A fun fact about me is that I have visited 30 countries so far!
          </div>
        </div>
      </div>
    </div>
    )
  }
}