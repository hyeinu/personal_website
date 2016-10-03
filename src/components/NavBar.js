import React, { Component } from 'react';

export default class NavBar extends Component{
  render(){
    return(
      <nav className="navbar navbar-fixed-top navbar-inverse mynavbar center-block">
        <div className="container">
        <div className="navbar-header text-center">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mynavbar" >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Home</a>
        </div>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="nav navbar-nav">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
        </div>
      </nav>
    )
  }
}
