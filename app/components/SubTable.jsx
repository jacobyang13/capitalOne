import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class SubTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingsData: [],
      listingsDataTemp2: [],
      searchValue: "",
      selectedOption: 'option1'
    }
  }

  //loads data upon load
  componentDidMount = () => {
    var data = this.props.data;
    this.setState({listingsDataTemp2: data, listingsData: data})

  }
  //handles three options choices
  handleOptionChange = e => {
    this.setState({selectedOption: e.target.value, listingsData: []});
  }
  //handles typing search bar
  handleSearch = (text) => {

    if (text === " ") {
      this.setState({listingsData: []});
    } else {
      this.setState({listingsData: this.state.listingsDataTemp2})

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
    var option = this.state.selectedOption;
    //if search is zero set table to zero
    if (this.state.searchValue.length === 0) {
      filteredTable = this.state.listingsData.filter((list) => {
        return ''

      });
    }
    //option 1 of neighborhood
    if (option === 'option1' && this.state.searchValue.length > 0) {
      filteredTable = this.state.listingsData.filter((list) => {
        return list.neighbourhood.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) === 0
      })
    }
    //option 2 of cancellation policy
    if (option === 'option2' && this.state.searchValue.length > 0) {
      filteredTable = this.state.listingsData.filter((list) => {
        return list.cancellation_policy.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) === 0

      })
    }
    //option 3 of property type
    if (option === 'option3' && this.state.searchValue.length > 0) {
      filteredTable = this.state.listingsData.filter((list) => {
        return list.property_type.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) === 0
      })
    }
    //return tables filitered by selected option chosen from data
    return (filteredTable.map((item, id) => (

      <tr key={id}>
        <td>{item.id}</td>
        <td>{item.neighbourhood}</td>
        <td>{item.latitude.substring(0,6)}</td>
        <td>{item.longitude.substring(0,8)}</td>
        <td>{item.price}</td>
        <td>{item.property_type}</td>
        <td>{item.room_type}</td>
        <td>{item.monthly_price}</td>
        <td>{item.reviews_per_month}</td>
        <td>{item.cancellation_policy}</td>
        <td>{item.review_scores_rating}</td>
      </tr>

    )));


  }
  //renders compelete search table
  render() {
    return (
      <div>
        <div><h3 className = "center">Search the entire database</h3></div>
        <div>
          <form>
            <div className="radio">
              <fieldset>
                <label className="inline">
                  <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange}/>
                  Neighborhood
                </label>
                <label className="inline">
                  <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
                  Cancellation Policy
                </label>
                <label className="inline">
                  <input type="radio" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange}/>
                  Property Type
                </label>
              </fieldset>

            </div>
          </form>
        </div>

        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="text" placeholder="Search by Neighborhood or Cancellation Policy or Property Type(To get rid of data, type in empty string)"/>
            <button className="button expanded custom">Search database</button>
          </form>
          <table className="hover unstriped width">
            <thead>
              <tr></tr>
              <tr>
                <th>Id</th>
                <th>Neighborhood</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Price</th>
                <th>Property Type</th>
                <th>Room Type</th>
                <th>Beds</th>
                <th>Reviews per Month</th>
                <th>Cancellation Policy</th>
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
}
module.exports = SubTable;
