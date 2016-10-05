import React, { Component } from 'react';

export default class Splash extends Component {
  render(){
    return (
      <div className="splash container text-center">
        <img src='src/images/name_badge.png' className="img-responsive nameBadge " alt=""/>
        <button className="btn resume"><strong>Download My Resume</strong></button>
      </div>
    )
  }
}
