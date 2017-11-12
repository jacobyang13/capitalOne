import React, {Component} from 'react';
import ReactDom from 'react-dom';
var uuid = require('node-uuid');
var moment = require('moment');
import {BrowserRouter, Route, Switch} from 'react-router-dom';
const apiBaseUrl = "http://localhost:3000/api/";
const apiBaseUrl1 = "http://capitalone-jacob-yang.herokuapp.com/api/";
import request from 'superagent';
import axios from 'axios';
import Logo from 'babel!svg-react!unc.svg';

import Nav from 'Nav'
import SearchMap from 'SearchMap'
import DataGraphs from 'DataGraphs'

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "loading...",
      listingsDataTemp: []
    };

  }
  componentDidMount = () => {
    //superagent makes a get request for listings.csv data that is being parsed by Papaparse from the server
    if (this.state.listingsDataTemp.length === 0) {
      request.get(apiBaseUrl1 + 'getAllListings').set('API-Key', 'foobar').set('Accept', 'application/json').end((err, res) => {
        var data = res.body.results.data;
        //allows data to be parsed before loading components
        // setTimeout(function() {
          this.setState({start: "", listingsDataTemp: data});
        // }.bind(this), 5000)

      })
    }

  }
  renderPage = () => {
    return (
      <div className="font">

        <div>
          <div>
            <BrowserRouter>
              <div>
                <Route component={Nav}></Route>

                <Switch>
                  <Route exact path='/' exact render={(props) => (<SearchMap data={this.state.listingsDataTemp} {...props}/>)}/>
                  <Route path='/graphs' exact render={(props) => (<DataGraphs data={this.state.listingsDataTemp} {...props}/>)}/>
                </Switch>
              </div>
            </BrowserRouter>

          </div>
        </div>
      </div>

    );
  }
  renderStart = () => {
    return (
      <div className="grid-x grid-padding-x align-center align-middle">

        <div className="shrink">
          <Logo/>
          <p1>Loading... Please Wait</p1>
        </div>

      </div>
    )
  }
  render() {
    return (
      <div>
        {this.state.start === "loading..."
          ? this.renderStart()
          : this.renderPage()}
      </div>
    )
  }
};

module.exports = Main;
