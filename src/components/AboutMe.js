import React, { Component } from 'react';

export default class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme col-sm-9">
      Hi my name is Hyein Yoo. I was born in South Korea but moved to the states when I was around 9 months old!
      Currently, I am aiming to be a Full Stack Web Developer. The most recent projects I have been working on have mostly implemented the following: Mongo, Express, React, and Nodejs.
      <h1>Exposure to:</h1>
      <div className="text-center">
        <span>
          <img style={{height: '75px'}} src="src/images/mern.png" alt=""/>
          <img style={{height: '75px'}} src="src/images/html_css_ecma.png" alt=""/>
          <img style={{height: '75px'}} src="src/images/jq_bt_mui_rx.png" alt=""/>
        </span>
        <span>
            <img style={{height: '75px'}} src="src/images/microsoft_office.png" alt=""/>
            <img style={{height: '75px'}} src="src/images/ps_ai_dw.png" alt=""/>
          </span>
        </div>
      </div>
    )
  }
}
