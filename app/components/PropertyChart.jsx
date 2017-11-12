import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {PieChart} from 'react-easy-chart';
import ReactTooltip from 'react-tooltip'

export class PropertyChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      house: 0.00,
      apartment: 0.00,
      condominium: 0.00,
      loft: 0.00,
      other: 0.00,
      bedBreakfast: 0.00,
      bungalow: 0.00,
      showToolTip: false,
      value: 0,
      total: 0,
      key: ""
    }
  }
  componentDidMount = () => {
    var tempData = this.props.data
    tempData = tempData.map((list) => {
      switch (list.property_type) {
        case "House":
          this.setState({
            house: this.state.house += 1
          });break;
        case "Apartment":
          this.setState({
            apartment: this.state.apartment += 1
          });
          break;
        case "Condominium":
          this.setState({
            condominium: this.state.condominium += 1
          });
          break;
        case "Loft":
          this.setState({
            loft: this.state.loft += 1
          });
          break;
        case "Other":
          this.setState({
            other: this.state.other += 1
          });
          break;
        case "Bed & Breakfast":
          this.setState({
            bedBreakfast: this.state.bedBreakfast += 1
          });
          break;
        case "Bungalow":
          this.setState({
            bungalow: this.state.bungalow += 1
          });
          break;

      }
    })
        this.setState({total: this.state.house + this.state.apartment + this.state.condominium + this.state.loft + this.state.other + this.state.bedBreakfast + this.state.bungalow})

  }

  clickHandler(d, e) {
    this.setState({
      showToolTip: true,
        value: d.value,
        key: d.data.key})
  }
  renderHover = () =>{

      if(this.state.value === 0){
        return(
          <a data-tip data-for='click'>There is a total amount of {this.state.total} properties</a>
        )
      }
      else{
        return(<a a data-tip data-for='click'>There are {this.state.value } {this.state.key} properties</a>)
      }
  }

  render() {

    return (
        <div className = "grid-x grid-padding-x align-center">
          <div>
          </div>
          <div className = "cell small-4 centerRight">
          <PieChart   innerHoleSize={200} size={450} data={[
      {
        key: 'House',
        value: this.state.house
      }, {
        key: 'Apartment',
        value: this.state.apartment
      }, {
        key: 'Condominium',
        value: this.state.condominium
      }, {
        key: 'Loft',
        value: this.state.loft
      }, {
        key: 'Bed & Breakfast',
        value: this.state.bedBreakfast
      }, {
        key: 'Bungalow',
        value: this.state.bungalow
      }, {
        key: 'Other',
        value: this.state.other
      }
    ]}
    clickHandler={this.clickHandler.bind(this)}
  />
  </div>
     {this.renderHover()}
</div>
  )
  }

}

module.exports = PropertyChart;
