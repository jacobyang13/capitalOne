import React, {Component} from 'react';
import ReactDom from 'react-dom';
const apiBaseUrl = "http://localhost:3000/api/";
// const apiBaseUrl = "http://capitalone-jacob-yang.herokuapp.com/api/";
import request from 'superagent';
import axios from 'axios';
import {BarChart} from 'react-easy-chart';
import Logo from 'babel!svg-react!unc.svg';
import $ from 'jquery'

class DataTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: "loading...",
      BayviewPrice: 0.00,
      BayviewCount: 0.00,
      BernalPrice: 0.00,
      BernalCount: 0.00,
      ChinaTownP: 0.00,
      ChinaTownC: 0.00,

      listingsData: [],
      listingsDataTemp: [],
      searchValue: ""
    };

  }

  componentDidMount = () => {
    //gets listing.csv data and stores that data in listingsDataTemp
    request.get(apiBaseUrl + 'getAllListings').set('API-Key', 'foobar').set('Accept', 'application/json').end((err, res) => {
      var data = res.body.results.data;
      //allows data to be parsed before loading components
      setTimeout(function() {
        this.setState({listingsDataTemp: data});
      }.bind(this), 5000);

    })
    setTimeout(function() {
      this.getAverage(); this.setState({start: ""});
    }.bind(this), 10000)


  }
  getAverage = () => {
  var tempData = this.state.listingsDataTemp;
  tempData = tempData.map((list) => {
    switch (list.neighbourhood) {
      case "Bayview":
        this.setState({
          BayviewPrice: this.state.BayviewPrice += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          BayviewCount: this.state.BayviewCount + 1
        }); break;
      case "Bernal Heights":
        this.setState({
          BernalPrice: this.state.BernalPrice += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          BernalCount: this.state.BernalCount + 1
        });break;
      case "Chinatown":
        this.setState({
          ChinaTownP: this.state.ChinaTownP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          ChinaTownC: this.state.ChinaTownC + 1
        });break;
    }
  })
  return;

}

  renderChart = () => {

    return (<BarChart height={550} colorBars width={750} axes axisLabels={{
      x: 'Neighbourhoods',
      y: 'Price'
    }} data={[{
        x: 'Bayview',
        y: this.state.BayviewPrice / this.state.BayviewCount
      },
      {
          x: 'Bernal Heighs',
          y: this.state.BernalPrice / this.state.BernalCount
        },
        {
            x: 'China Town',
            y: this.state.ChinaTownP / this.state.ChinaTownC
          }

    ]}/>)
  }

handleSearch = (text) => {

    if (text === " ") {
      this.setState({listingsData: []});
    } else {
      this.setState({listingsData: this.state.listingsDataTemp})

    }
  }
  handleSubmit = e => {
    e.preventDefault();
    var text = this.refs.text.value;
    this.setState({searchValue: text})
    if (text.length > 0) {
      this.refs.text.value = '';
      {
        this.handleSearch(text)
      }
    }
  }
  renderResult = () => {
    var filteredTable = this.state.listingsData;
    if (this.state.searchValue.length === 0) {
      filteredTable = this.state.listingsData.filter((list) => {
        return ''

      });
    }
    if (this.state.searchValue.length > 0) {
      filteredTable = this.state.listingsData.filter((list) => {
        return list.neighbourhood.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) === 0
      })
    }

    return (filteredTable.map((item, id) => (
      <tr key={id}>
        <td>{item.id}</td>
        <td>{item.neighbourhood}</td>
        <td>{item.latitude}</td>
        <td>{item.longitude}</td>
        <td>{item.price}</td>
        <td>{item.property_type}</td>
        <td>{item.room_type}</td>
        <td>{item.beds}</td>
        <td>{item.cleaning_fee}</td>
        <td>{item.reviews_per_month}</td>
        <td>{item.security_deposit}</td>
        <td>{item.review_scores_rating}</td>
      </tr>
    )));

  }

  renderData = () => {
    return (
      <div>
        <div>
          {this.renderChart()}
        </div>

        <div className="makeSmaller">
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" ref="text" placeholder="Search Neighbourhoods"/>
              <button className="button expanded custom">Search</button>
            </form>
            <table className="hover unstriped">
              <thead>
                <tr></tr>
                <tr>
                  <th>Id</th>
                  <th>Neighbourhood</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                  <th>Price</th>
                  <th>Property Type</th>
                  <th>Room Type</th>
                  <th>Beds</th>
                  <th>Cleaning fee</th>
                  <th>Reviews per Month</th>
                  <th>Security Deposit</th>
                  <th>Review Scores Rating</th>
                </tr>
              </thead>
              <tbody>
                {this.renderResult()}
              </tbody>
            </table>

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
