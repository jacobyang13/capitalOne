import React, {Component} from 'react';
import ReactDom from 'react-dom';
const apiBaseUrl = "http://localhost:3000/api/";
const apiBaseUrl1 = "http://capitalone-jacob-yang.herokuapp.com/api/";
import request from 'superagent';
import axios from 'axios';
import Logo from 'babel!svg-react!unc.svg';
import SubTable from 'SubTable'
import SubTableSelected from 'SubTableSelected'
import Map from 'Map'

class SearchMap extends React.Component {
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
    }.bind(this), 30000)
  }

  //methods for adding listings to table and removing
  removeTableItem = itemIndex => {
    const filteredItems = this.state.selectedItems.filter((item, idx) => itemIndex !== idx);
    this.setState({selectedItems: filteredItems});
  }

  addItem = mysqlTables => {
    const newItem = this.state.selectedItems.concat(mysqlTables);
    this.setState({selectedItems: newItem});
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
      <Map data ={this.state.listingsDataTemp}/>
        <div>
          {/* {this.renderSubTableSelected()} */}
        </div>
        <div>
          <div className="callout">
            {this.renderSubTable()}
          </div>
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
module.exports = SearchMap;
