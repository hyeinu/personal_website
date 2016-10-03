const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import './style.css'

import App from './components/App'
import Layout from './components/Layout'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <Router history = {browserHistory}>
    <Route path ='/' component = {Layout}>
     <IndexRoute component={App}/>
     {/* <Route path = '/register' component ={Register}/>
     <Route path = '/login' component ={LoginForm}/>
     <Route path = '/profile' component ={ViewProfile}/>
     <Route path = '/reviews' component ={BeerReview}/> */}
    </Route>
  </Router>,
  document.getElementById('root')
);
