import React, {Component} from 'react';
import ReactDom from 'react-dom';
var uuid = require('node-uuid');
var moment = require('moment');
import {BrowserRouter, Route, Switch} from 'react-router-dom';
const test = "http://localhost:3000/api/";
const apiBaseUrl = "http://capitalone-jacob-yang.herokuapp.com/api/";
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
      request.get(apiBaseUrl + 'getAllListings').set('API-Key', 'foobar').set('Accept', 'application/json').end((err, res) => {
        var data = res.body.results.data;
        //sets state to listings data that is now a json object of array
        this.setState({start: "", listingsDataTemp: data});

      })
    }

  }
  //renders 1st page wiht map and has link to second page of graphs
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
  //creates loading unc spinning animation - allows data to parsed.
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
