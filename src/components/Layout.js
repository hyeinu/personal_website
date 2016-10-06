import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';
import NavBar from './NavBar'

import Splash from './Splash'
import AboutMe from './AboutMe'
import Connect from './Connect'
import Projects from './Projects'

export default class Layout extends Component {
  constructor(props){
    super(props)
    this.state = {
      view: 'splash'
    }
    this._onClickSplash = this._onClickSplash.bind(this);
    this._onClickAboutMe = this._onClickAboutMe.bind(this);
    this._onClickConnect = this._onClickConnect.bind(this);
    this._onClickProjects = this._onClickProjects.bind(this);
  }
  _onClickSplash(){
    this.setState({
      view: 'splash'
    })
  }
  _onClickAboutMe(){
    this.setState({
      view: 'aboutme'
    })
  }
  _onClickConnect(){
    this.setState({
      view: 'connect'
    })
  }
  _onClickProjects(){
    this.setState({
      view: 'projects'
    })
  }
  render() {
    let { view } = this.state;
    let child;
    if(view === 'splash'){
      child = <Splash />
    } else if(view === 'aboutme'){
      child = <AboutMe />
    } else if (view === 'connect'){
      child = <Connect />
    } else if (view === 'projects'){
      child = <Projects />
    }
    return (
    <div className="container">
      <div className="row">
        {child}
      </div>
      <NavBar splash={this._onClickSplash} aboutme={this._onClickAboutMe} connect={this._onClickConnect} projects={this._onClickProjects} />
    </div>
    )
  }
}
