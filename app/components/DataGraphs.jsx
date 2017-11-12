import React, {Component} from 'react';
import ReactDom from 'react-dom'

import NeighborhoodPrices from 'NeighborhoodPrices'
import NeighborhoodReviews from 'NeighborhoodReviews'
import AllReviews from 'AllReviews'
import PropertyChart from 'PropertyChart'

class DataGraphs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  //renders all visulations
  renderNeighborhoodReviews = () => {
    return (<NeighborhoodReviews data={this.props.data}/>)
  }
  renderNeighborhoodPrices = () => {
    return (<NeighborhoodPrices data={this.props.data}/>)
  }
  renderAllReviews = () => {
    return (<AllReviews data={this.props.data}/>)
  }
  renderPropertyChart = () => {
    return (<PropertyChart data={this.props.data}/>)
  }
  render() {
    return (
      <div>
        <div className="grid-x grid-padding-x align-center">
          <div>
            <h2 className="center">Graphs</h2>
          </div>
          <div className="cell">
            <div className="callout">
              <h3 className="center">Total number of different types of property in San Francisco</h3>
              <p className="center">Click on graph to show data</p>
              {this.renderPropertyChart()}</div>
          </div>
          <div className="cell">
            <div className="callout">
              <h3 className="center">Average price per night for each neighborhood in San Francisco</h3>
              <p className="center">Click on graph to show data</p>
              {this.renderNeighborhoodPrices()}</div>
          </div>
          <div className="cell">
            <div className="callout">
              <h3 className="center">Average overall rating for each neighborhood in San Francisco</h3>
              <p className="center">Click on graph to show data</p>
              {this.renderNeighborhoodReviews()}</div>
          </div>
          <div className="cell">
            <div className="callout">
              <h3 className="center">Average overall rating depending on cancellation policy in San Francisco</h3>
              <p className="center">Click on graph to show data</p>
              {this.renderAllReviews()}</div>
          </div>
        </div>

      </div>
    )
  }
}
module.exports = DataGraphs;
