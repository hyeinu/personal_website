import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Layout extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
    browserHistory.push('/')
  }
  render() {
    return (
    <div>
    </div>
    )
  }
}
