import React, { Component } from 'react';

export default class Projects extends Component {
  render(){
    return (
      <div>
        <h1 className="text-center"> - PROJECTS - </h1>
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
          <img className="img-responsive" src="src/images/animalFarm.gif" alt="..." />
          <div className="caption">
            <h3>Animal Farm</h3>
            <p>
            This project was built with React on Flux, Mongo, Express, and Node.
            Gives the ability of users to upload a pet that you can adopt.
            The view rendered can be filtered by different results.
            As an owner you can adopt pets.
            </p>
            <p>
              <a href="https://github.com/hyeinu/animal-farm"><i className="fa fa-4x fa-github-square"></i></a>
              <a href="https://powerful-inlet-59447.herokuapp.com/"><i className="fa fa-3x fa fa-desktop"></i></a>
            </p>
          </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
          <img className="img-responsive" src="src/images/menubuilder.png" alt="..." />
          <div className="caption">
            <h2>Menu Builder</h2>
            <p>
            Used MySQL for the database and vanilla React.
            The idea for this app was to allow restaurant owners to develop their menu and be able to add, delete, and edit items.
            In the future we are thinking of converting to MongoDB as the primary database.
            </p>
            <p>
              <a href="https://github.com/hyeinu/menu-builder"><i className="fa fa-4x fa-github-square"></i></a>
            </p>
          </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
          <img className="img-responsive" src="src/images/bookshare.gif" alt="..." />
          <div className="caption">
            <h3>BookShare</h3>
            <p>
            This project was built with React on Redux, Mongo, Express, and Node.
            This App was designed to allow other users to connect and buy textbooks from each other.
            We utilized the Google API to search for books and Stripe for payments.
            </p>
            <p>
              <a href="https://github.com/FigsAndRice/BookShare-App"><i className="fa fa-4x fa-github-square"></i></a>
              <a href="http://bookshare-app.herokuapp.com/"><i className="fa fa-3x fa fa-desktop"></i></a>
            </p>
          </div>
          </div>
        </div>
        <div className="col-xs-12 padBottom bkg text-center">
          <h1>Current Projects:</h1>
          <h3>Food Truck - React Native App</h3>
          <a href="https://github.com/FigsAndRice/foodtruck-app"><i className="fa fa-4x fa-github-square"></i></a>
        </div>
      </div>
    )
  }
}
