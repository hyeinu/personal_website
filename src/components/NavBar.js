import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component{
  render(){
    return(
      <nav className="navbar navbar-fixed-bottom navbar-inverse">
        <div className="container">
        <div className="navbar-header text-center">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mynavbar" >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <button onClick={this.props.splash} className="navbar-brand">Home</button>
        </div>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="nav navbar-nav">
            <li><button onClick={this.props.aboutme}>About Me</button></li>
            <li><button onClick={this.props.projects}>Projects</button></li>
            <li><button onClick={this.props.connect}>Connect</button></li>
          </ul>
        </div>
        </div>
      </nav>
    )
  }
}
