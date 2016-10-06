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
          <a onClick={this.props.splash} className="navbar-brand">Home</a>
        </div>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="nav navbar-nav">
            <li><a onClick={this.props.aboutme}>About Me</a></li>
            <li><a onClick={this.props.projects}>Projects</a></li>
            <li><a onClick={this.props.connect}>Connect</a></li>
          </ul>
        </div>
        </div>
      </nav>
    )
  }
}
