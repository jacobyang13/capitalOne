import React, {Component} from 'react';
import ReactDom from 'react-dom';
const apiBaseUrl = "http://localhost:3000/api/";
const apiBaseUrl1 = "http://capitalone-jacob-yang.herokuapp.com/api/";
import request from 'superagent';
import axios from 'axios';
import NeighbourhoodPrices from 'NeighbourhoodPrices'
import NeighbourhoodReviews from 'NeighbourhoodReviews'
import AllReviews from 'AllReviews'
import PropertyChart from 'PropertyChart'
import Logo from 'babel!svg-react!unc.svg';


class DataGraphs extends React.Component {
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
    request.get(apiBaseUrl1 + 'getAllListings').set('API-Key', 'foobar').set('Accept', 'application/json').end((err, res) => {
      var data = res.body.results.data;
      //allows data to be parsed before loading components
      this.setState({listingsDataTemp: data});

    })
    //allows data to be rendered and parsed. Loading screen set to 20 seconds
    setTimeout(function() {
      this.setState({start: ""});
    }.bind(this), 9000)

  }

  //renders all visulations
  renderNeighbourhoodReviews = () => {
    return (<NeighbourhoodReviews data={this.state.listingsDataTemp}/>)
  }
  renderNeighbourhoodPrices = () => {
    return (<NeighbourhoodPrices data={this.state.listingsDataTemp}/>)
  }
  renderAllReviews = () => {
    return (<AllReviews data={this.state.listingsDataTemp}/>)
  }
  renderPropertyChart = () => {
    return (<PropertyChart data={this.state.listingsDataTemp}/>)
  }
  renderSubTable = () => {
    return (<SubTable data={this.state.listingsDataTemp} onItemClick={this.addItem}/>)
  }
  renderSubTableSelected = () => {
    return (<SubTableSelected data={this.state.selectedItems} onItemClick={this.removeTableItem}/>)
  }
  renderData = () => {
    return (
      <div>
        <div className = "grid-x grid-padding-x align-center">
          <div className = "cell"><div className = "callout"><h3 className = "center">Pie Chart Graph for different types of property in San Francisco</h3>
          <p className = "center">Click on graph to show data</p>
          {this.renderPropertyChart()}</div></div>
          <div className = "cell"><div className = "callout"><h3 className = "center">Bar Graph for average price per night for each neighbourhood in San Francisco</h3>
            <p className = "center">Click on graph to show data</p>
          {this.renderNeighbourhoodPrices()}</div></div>
          <div className = "cell"><div className = "callout"><h3 className = "center">Line Chart for average rating for each neighbourhood in San Francisco</h3>
            <p className = "center">Click on graph to show data</p>
          {this.renderNeighbourhoodReviews()}</div></div>
          <div className = "cell"><div className = "callout"><h3 className = "center">Line Chart for average rating depending on cancellation policy in San Francisco</h3>
            <p className = "center">Click on graph to show data</p>
          {this.renderAllReviews()}</div></div>
        </div>

      </div>
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
                      :this.renderData()}
                </div>
              )
}
}
module.exports = DataGraphs;