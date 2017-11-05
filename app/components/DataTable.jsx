import React, {Component} from 'react';
import ReactDom from 'react-dom';
// const apiBaseUrl = "http://localhost:3000/api/";
const apiBaseUrl = "https://hidden-atoll-90934.herokuapp.com/"
import request from 'superagent';
import axios from 'axios';


class DataTable extends React.Component {

constructor(props) {
    super(props);

    this.state = {
      listingsData: [],
      listingsDataTemp: [],
      searchValue: ""
    };

}


componentDidMount = () => {
  request.get(apiBaseUrl + 'getAllListings').set('API-Key', 'foobar').set('Accept', 'application/json').end((err, res) => {
      var data = res.body.results.data;
      this.setState({listingsDataTemp: data})
  })

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
renderResult = () =>{
    var filteredTable = this.state.listingsData;
    if(this.state.searchValue.length === 0){
      filteredTable = this.state.listingsData.filter((list) => {
        return ''

      });
    }
    if(this.state.searchValue.length > 0){
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

render() {
    return (
      <div className = "makeSmaller">
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="text" placeholder="Search Neighbourhoods"/>
            <button className="button expanded custom">Search</button>
          </form>
          <table className = "hover unstriped">
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
    )

  }

};

export default DataTable;
