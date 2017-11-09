import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {LineChart} from 'react-easy-chart';
import ReactTooltip from 'react-tooltip'

export class AllReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cancelStrictScore: 0,
      cancelModerateScore:0,
      cancelFlexibleScore: 0,
      cancelStrictCount: 0.00,
      cancelModerateCount: 0,
      cancelFlexibleCount: 0,
      showToolTip: false,
      y: "",
      x: ""
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
    clickHandler(d, e) {
      this.setState({
        showToolTip: true,
          y: d.y,
          x: d.x})
    }
   createTooltip(){
     if(this.state.showToolTip){
       return(
         <div>
           <a data-tip data-for='click'> The average rating is a {this.state.y.toFixed(2)} with a {this.state.x} cancellation policy</a>
     </div>
       )
     }
   }
  render() {
      return(
        <div className = "grid-x align-center">
          <div className = "cell">
        <LineChart
          width={1000}
          height={500}
          axes
          lineColors={['red']}
          dataPoints
          axisLabels={{x: 'All Cancellation Policy', y: 'All Overall Rating'}}
          grid
          // margin={{top: 10, right: 10, bottom: 10, left: 0}}
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
        clickHandler = {this.clickHandler.bind(this)}
  />
</div>
{this.createTooltip()}
  </div>
      )
    }

}

module.exports = AllReviews;
