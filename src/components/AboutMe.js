import React, { Component } from 'react';

export default class AboutMe extends Component {
  render() {
    return (
      <div className="col-sm-9 padBottom">
      <h1 className="text-center"> - ABOUT ME - </h1>
      <strong>
        Hi my name is Hyein Yoo. I was born in South Korea but moved to the states when I was 9 months old.
        I hold a Bachelor of Science in Psychobiology from the Southern Adventist University.
        Currently, I am aiming to be a Full Stack Web Developer. The most recent projects I have been working on have mostly implemented the following: Mongo, Express, React, and Nodejs.
      </strong>
      <div className="text-center">
      <h1> - MY SKILLS - </h1>
        <span>
          <img src="src/images/html.png" alt=""/>
          <img src="src/images/css.png" alt=""/>
          <img src="src/images/ecmascript.png" alt=""/>
          <img style={{ height: '100px' }} src="src/images/photoshop.png" alt=""/>
          <img style={{ height: '100px' }} src="src/images/illustrator.png" alt=""/>
          <img style={{ height: '100px' }} src="src/images/dreamweaver.png" alt=""/>
          <img src="src/images/mongo.png" alt=""/>
          <img src="src/images/express.png" alt=""/>
          <img src="src/images/react.png" alt=""/>
          <img src="src/images/nodejs.png" alt=""/>
          <img src="src/images/redux.png" alt=""/>
          <img src="src/images/jquery.png" alt=""/>
          <img src="src/images/bootstrap.png" alt=""/>
          <img src="src/images/materialui.png" alt=""/>
        </span>
        </div>
        <div className="text-center">
          <a href="/hyein_yoo-resume_v2.pdf" style={{ color: 'black' }}><button className="btn resume"><strong>Download My Resume</strong></button></a>
        </div>
      </div>
    )
  }
}
