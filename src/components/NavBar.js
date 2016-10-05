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
          <Link to='/' className="navbar-brand">Home</Link>
        </div>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="nav navbar-nav">
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/about">Projects</Link></li>
            <li><Link to="/connect">Connect</Link></li>
          </ul>
        </div>
        </div>
      </nav>
    )
  }
}
