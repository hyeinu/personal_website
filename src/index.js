const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import './style.css'

import Splash from './components/Splash'
import Layout from './components/Layout'
import AboutMe from './components/AboutMe'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <Router history = {browserHistory}>
    <Route path ='/' component = {Layout}>
     <IndexRoute component={Splash} />
     <Route path = '/about' component ={AboutMe} />
     {/* <Route path = '/login' component ={LoginForm}/>
     <Route path = '/profile' component ={ViewProfile}/>
     <Route path = '/reviews' component ={BeerReview}/> */}
    </Route>
  </Router>,
  document.getElementById('root')
);
