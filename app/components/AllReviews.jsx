import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {LineChart} from 'react-easy-chart';
import ReactTooltip from 'react-tooltip'

export class AllReviews extends React.Component {
  constructor(props) {
    super(props);
    const initialWidth = window.innerWidth > 0 ? window.innerWidth : 500;
     this.handleResize = this.handleResize.bind(this);
    this.state = {
      cancelStrictScore: 0,
      cancelModerateScore:0,
      cancelFlexibleScore: 0,
      cancelStrictCount: 0.00,
      cancelModerateCount: 0,
      cancelFlexibleCount: 0,
      showToolTip: false,
      y: "",
      x: "",
      windowWidth: initialWidth - 100,
      componentWidth: 300
    }
  }
  handleResize = ()=> {
    this.setState({
      windowWidth: window.innerWidth - 100,
      componentWidth: this.refs.component.offsetWidth
    });
  }
  componentDidMount = () =>{
        var tempData = this.props.data
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
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
              <div ref = "component">
        <LineChart
        width = {this.state.componentWidth} height = {this.state.componentWidth / 2}
          lineColors={['red']}
          dataPoints
          axisLabels={{x: 'All Cancellation Policy', y: 'All Overall Rating'}}
          grid
          axes
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

</div>
{this.createTooltip()}
  </div>
      )
    }

}

module.exports = AllReviews;
