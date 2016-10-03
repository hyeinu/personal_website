import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';
import NavBar from './NavBar'

export default class Layout extends Component {
  render() {
    return (
    <div>
      <NavBar />
      {this.props.children}
    </div>
    )
  }
}
