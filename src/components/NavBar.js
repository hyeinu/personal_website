import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component{
  constructor(props){
    super(props);

    this.changeView = this.changeView.bind(this);
  }
  changeView(view){
    this.props.changeView(view);
    let el = document.getElementById('mynavbar');
    el.classList.remove('in');
  }
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
          <a onClick={this.changeView.bind(null, 'splash')} className="navbar-brand">Home</a>
        </div>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="nav navbar-nav">
            <li data-target="#mynavbar"><a onClick={this.changeView.bind(null, 'aboutme')}>About Me</a></li>
            <li data-target="#mynavbar"><a onClick={this.changeView.bind(null, 'projects')}>Projects</a></li>
            <li data-target="#mynavbar"><a onClick={this.changeView.bind(null, 'connect')}>Connect</a></li>
          </ul>
        </div>
        </div>
      </nav>
    )
  }
}
