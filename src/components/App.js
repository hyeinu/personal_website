import React from 'react'

import Splash from './Splash'
import AboutMe from './AboutMe'
import Education from './Education'
import Projects from './Projects'

const App = React.createClass({
  render(){
    return (
      <div>
        <Splash />
        <div className="bkg-color">
          <Education />
          <AboutMe />
          <Projects />
        </div>
      </div>
    );
  }
});


export default App;
