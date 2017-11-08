import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {LineChart} from 'react-easy-chart';

export class AllReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cancelStrictScore: 0,
      cancelModerateScore:0,
      cancelFlexibleScore: 0,
      cancelStrictCount: 0.00,
      cancelModerateCount: 0,
      cancelFlexibleCount: 0
    }
  }
  componentDidMount = () =>{
        var tempData = this.props.data
        tempData = tempData.map((list) =>{
          switch(list.cancellation_policy){
            case "strict":
              if(list.review_scores_rating !== "" || null){
              this.setState({
                cancelStrictScore: this.state.cancelStrictScore += Number(list.review_scores_rating),
                 cancelStrictCount: this.state.cancelStrictCount += 1 });}
              break;
              case "moderate":
              if(list.review_scores_rating !== "" || null){
              this.setState({
                cancelModerateScore: this.state.cancelModerateScore += Number(list.review_scores_rating),
                 cancelModerateCount: this.state.cancelModerateCount += 1 })}
              break;
              case "flexible":
              if(list.review_scores_rating !== "" || null){
              this.setState({
                  cancelFlexibleScore: this.state.cancelFlexibleScore += Number(list.review_scores_rating),
                 cancelFlexibleCount: this.state.cancelFlexibleCount += 1 })}
              break;

          }
        })
    }
  render() {
      return(
        <LineChart
          width={1250}
          height={500}
          axes
          dataPoints
          axisLabels={{x: 'All Cancellation Policy', y: 'All Overall Rating'}}
          grid
          margin={{top: 10, right: 20, bottom: 50, left: 65}}
          xType={'text'}  interpolate={'cardinal'}
        data={[
          [
            { x: 'Flexible', y: this.state.cancelFlexibleScore / this.state.cancelFlexibleCount},
            {
               x: 'Moderate', y: this.state.cancelModerateScore / this.state.cancelModerateCount},
               {
                  x: 'Strict', y: this.state.cancelStrictScore / this.state.cancelStrictCount},
          ]
        ]}
      />

      )
    }

}

module.exports = AllReviews;
