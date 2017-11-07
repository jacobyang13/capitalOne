import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {PieChart} from 'react-easy-chart';

export class PropertyChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      house: 0.00,
      apartment:0.00,
      condominium: 0.00,
      loft: 0.00,
      other:0.00,
      bedBreakfast:0.00,
      bungalow:0.00
    }
  }
  componentDidMount = () =>{
        var tempData = this.props.data
        tempData = tempData.map((list) =>{
          switch(list.property_type){
            case "House":
              this.setState({
                house: this.state.house +=1})
              break;
              case "Apartment":
              this.setState({
                apartment: this.state.apartment +=1});
              break;
              case "Condominium":
              this.setState({
                condominium: this.state.condominium +=1 });
              break;
              case "Loft":
              this.setState({
              loft: this.state.loft +=1});
              break;
              case "Other":
              this.setState({
              other: this.state.other +=1});
              break;
              case "Bed & Breakfast":
              this.setState({
              bedBreakfast: this.state.bedBreakfast +=1});
              break;
              case "Bungalow":
              this.setState({
              bungalow: this.state.bungalow +=1});
              break;

          }
        })
    }
  render() {
      return(
        <PieChart
          labels
          innerHoleSize={200}
          size={400}
      data={[
        { key: 'House', value: this.state.house },
        { key: 'Apartment', value: this.state.apartment },
        { key: 'Condominium', value: this.state.condominium },
                { key: 'Loft', value: this.state.loft },

                                { key: 'Bed & Breakfast', value: this.state.bedBreakfast },
                                        { key: 'Bungalow', value: this.state.bungalow },
                                          { key: 'Other', value: this.state.other }
      ]}
    />
      )
    }

}

module.exports = PropertyChart;
