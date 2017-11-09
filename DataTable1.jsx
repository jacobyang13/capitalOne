import React, {Component} from 'react';
import ReactDom from 'react-dom';
const apiBaseUrl = "http://localhost:3000/api/";
const apiBaseUrl1 = "http://capitalone-jacob-yang.herokuapp.com/api/";
import request from 'superagent';
import axios from 'axios';
import Logo from 'babel!svg-react!unc.svg';
import Map from 'Map'



class DataTable1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: "loading...",
      listingsDataTemp: [],
            selectedItems: []
    };

  }

  componentDidMount = () => {
    //superagent makes a get request for listings.csv data that is being parsed by Papaparse from the server
    request.get(apiBaseUrl + 'getAllListings').set('API-Key', 'foobar').set('Accept', 'application/json').end((err, res) => {
      var data = res.body.results.data;
      //allows data to be parsed before loading components
      this.setState({listingsDataTemp: data});

    })
    //allows data to be rendered and parsed. Loading screen set to 20 seconds
    setTimeout(function() {
      this.setState({start: ""});
    }.bind(this), 5000)
  }


  renderData = () => {
    return (
      <Map/>
              ) }


              renderStart = () => {return (
                <div className = "grid-x grid-padding-x align-center align-middle">

                  <div className="shrink">
                    <Logo/>
                    <p1>Loading... Please Wait</p1>
                  </div>

              </div>
              )
}
              render() {return (
                <div>
                  {this.state.start === "loading..."
                    ? this.renderStart()
                    : this.renderData()}
                </div>
              )
}
}
module.exports = DataTable1;
