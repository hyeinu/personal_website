import React, { Component } from 'react';

export default class Projects extends Component {
  render(){
    return (
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
          <img src="..." alt="..." />
          <div className="caption">
            <h3>Animal Farm</h3>
            <p>
            This project was built with React on Flux, Mongo, Express, and Node.
            Gives the ability of users to upload a pet that you can adopt.
            The view rendered can be filtered by different results.
            As an prospective owner you can adopt and unadopt pets.
            </p>
            <p>
              <a href="https://github.com/hyeinu/animal-farm"><i className="fa fa-3x fa-github-square"></i></a>
              <a href="https://powerful-inlet-59447.herokuapp.com/"><i className="fa fa-3x fa fa-desktop"></i></a>
            </p>
          </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
          <img src="..." alt="..." />
          <div className="caption">
            <h3>Animal Farm</h3>
            <p>
            This project was built with React on Flux, Mongo, Express, and Node.
            Gives the ability of users to upload a pet that you can adopt.
            The view rendered can be filtered by different results.
            As an prospective owner you can adopt and unadopt pets.
            </p>
            <p>
              <a href="https://github.com/hyeinu/animal-farm"><i className="fa fa-3x fa-github-square"></i></a>
              <a href="https://powerful-inlet-59447.herokuapp.com/"><i className="fa fa-3x fa fa-desktop"></i></a>
            </p>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
