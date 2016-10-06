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
    this._changeView = this._changeView.bind(this);
  }
  _changeView(view){
    this.setState({
      view
    })
  }
  render() {
    let { view } = this.state;
    let child;

    switch(view){
      case 'splash':
        child = <Splash />;
        break;
      case 'aboutme':
        child = <AboutMe />
        break;
      case 'connect':
        child = <Connect />
        break;
      case 'projects':
        child = <Projects />
        break;
      default:
        child = <Splash />;
        break;
    }
    return (
    <div className="container">
      <div className="row">
        {child}
      </div>
      <NavBar changeView={this._changeView} />
    </div>
    )
  }
}
