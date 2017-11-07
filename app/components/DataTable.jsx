import React, {Component} from 'react';
import ReactDom from 'react-dom';
// const apiBaseUrl = "http://localhost:3000/api/";
const apiBaseUrl = "http://capitalone-jacob-yang.herokuapp.com/api/";
import request from 'superagent';
import axios from 'axios';
import NeighbourhoodPrices from 'NeighbourhoodPrices'
import NeighbourhoodReviews from 'NeighbourhoodReviews'
import AllReviews from 'AllReviews'
import SubTable from 'SubTable'
import PropertyChart from 'PropertyChart'
import Logo from 'babel!svg-react!unc.svg';

class DataTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: "loading...",
      listingsDataTemp: []
    };

  }

  componentDidMount = () => {
    //gets listing.csv data and stores that data in listingsDataTemp
    request.get(apiBaseUrl + 'getAllListings').set('API-Key', 'foobar').set('Accept', 'application/json').end((err, res) => {
      var data = res.body.results.data;
      //allows data to be parsed before loading components
      this.setState({listingsDataTemp: data});

    })
    setTimeout(function() {
      this.setState({start: ""});
    }.bind(this), 20000)

  }

  renderNeighbourhoodReviews = () =>{
    return( <NeighbourhoodReviews data = {this.state.listingsDataTemp}/>)
  }
  renderNeighbourhoodPrices = ()  =>{
      return( <NeighbourhoodPrices data = {this.state.listingsDataTemp}/>)
  }
  renderAllReviews = () => {
      return( <AllReviews data = {this.state.listingsDataTemp}/>)
  }
  renderSubTable = () => {
    return( <SubTable data = {this.state.listingsDataTemp}/>)
  }
  renderPropertyChart = () => {
    return(<PropertyChart data = {this.state.listingsDataTemp}/>)
  }

  renderData = () => {
    return (
      <div>
        <div>
        <div>
          {this.renderSubTable()}
      </div>
          <div>
        {this.renderNeighbourhoodReviews()}
          </div>
        <div>
          {this.renderNeighbourhoodPrices()}
        </div>
        <div>
          {this.renderAllReviews()}
        </div>
        <div>
          {this.renderPropertyChart()}
        </div>
      </div>
    </div>
    )
  }
  renderStart = () => {
    return (
      <div>
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
          : this.renderData()}
      </div>
    )
  }

};

export default DataTable;
