import React, { Component } from 'react';

export default class Connect extends Component {
  render(){
    let string = "- CONNECT -";
    return (
      <div className="col-sm-9 text-center connect">
        <h1>- CONNECT -</h1>
        <span>
          <a href="https://twitter.com/hyeinu65"><i style={{color: '#55acee'}} className="fa fa-5x fa-twitter-square"></i></a>
          <a href="https://www.facebook.com/hyein.yoo.9"><i style={{color: '#3b5998'}} className="fa fa-5x fa-facebook-square" ></i></a>
          <a href="https://github.com/hyeinu"><i style={{color: 'black'}} className="fa fa-5x fa-github-square"></i></a>
          <a href="https://www.linkedin.com/in/hyein-yoo-217018ab"><i style={{color: '#3b5998'}} className="fa fa-5x fa-linkedin-square"></i></a>
          <a href="mailto:hyeinu65@gmail.com"><i style={{color: '#dc4e41'}} className="fa fa-5x fa-envelope"></i></a>
        </span>
      </div>
    )
  }
}
