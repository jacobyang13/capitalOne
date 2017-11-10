import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {LineChart} from 'react-easy-chart';
import ReactTooltip from 'react-tooltip'

export class NeighbourhoodReviews extends React.Component {
  constructor(props) {
    super(props);
    const initialWidth = window.innerWidth > 0 ? window.innerWidth : 500;
     this.handleResize = this.handleResize.bind(this);
    this.state = {
      bayviewR: 0.00,
      bayviewCount2: 0.00,
      bernalR: 0.00,
      bernalCount2: 0.00,
      chinaTownR: 0.00,
      chinaTownC2: 0.00,
      crockerR: 0.00,
      crockerC2: 0.00,
      diamondR: 0.00,
      diamondC2: 0.00,
      downtownR: 0.00,
      downtownC2: 0.00,
      excelsiorR: 0.00,
      excelsiorC2: 0.00,
      financialR: 0.00,
      financialC2: 0.00,
      glenR: 0.00,
      glenC2: 0.00,
      haightR: 0.00,
      haightC2: 0.00,
      innerSunR: 0.00,
      innerSunC2: 0.00,
      lakeShoreR: 0.00,
      lakeShoreC2: 0.00,
      marinaR: 0.00,
      marinaC2: 0.00,
      missionR: 0.00,
      missionC2: 0.00,
      nobR: 0.00,
      nobC2: 0.00,
      noeR: 0.00,
      noeC2: 0.00,
      northR: 0.00,
      northC2: 0.00,
      oceanR: 0.00,
      oceanC2: 0.00,
      richmondR: 0.00,
      richmondC2: 0.00,
      outersR: 0.00,
      outersC2: 0.00,
      pacificR: 0.00,
      pacificC2: 0.00,
      parksideR: 0.00,
      parksideC2: 0.00,
      potrHillR: 0.00,
      potrHillC2: 0.00,
      presidioR: 0.00,
      presidioC2: 0.00,
      russianHillR: 0.00,
      russianHillC2: 0.00,
      seaCliffR: 0.00,
      seaCliffC2: 0.00,
      southBR: 0.00,
      southBC2: 0.00,
      twinPeaksR: 0.00,
      twinPeaksC2: 0.00,
      visitR: 0.00,
      visitC2: 0.00,
      westPortalR: 0.00,
      westPortalC2: 0.00,
      westernR: 0.00,
      westernC2: 0.00,
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
    var tempData = this.props.data;
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    tempData = tempData.map((list) => {
      switch (list.neighbourhood) {
        case "Bayview":
          if(list.review_scores_rating !== "" || null){
          this.setState({
            bayviewR: this.state.bayviewR += Number(list.review_scores_rating),
            bayviewCount2: this.state.bayviewCount2 += 1
          }); }
          break;
        case "Bernal Heights":
          if(list.review_scores_rating !== "" || null){
          this.setState({
            bernalR: this.state.bernalR += Number(list.review_scores_rating),
            bernalCount2: this.state.bernalCount2 += 1
          });}
          break;
        case "Chinatown":
          if(list.review_scores_rating !== "" || null){
          this.setState({
            chinaTownR: this.state.chinaTownR += Number(list.review_scores_rating),
            chinaTownC2: this.state.chinaTownC2 += 1
          });}
          break;
        case "Crocker Amazon":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            crockerR: this.state.crockerR += Number(list.review_scores_rating),
            crockerC2: this.state.crockerC2 += 1
          });}
          break;
        case "Diamond Heights":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            diamondR: this.state.diamondR += Number(list.review_scores_rating),
            diamondC2: this.state.diamondC2 += 1
          });}
          break;
        case "Downtown":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            downtownR: this.state.downtownR += Number(list.review_scores_rating),
            downtownC2: this.state.downtownC2 += 1
          });}
          break;
        case "Excelsior":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            excelsiorR: this.state.excelsiorR += Number(list.review_scores_rating),
            excelsiorC2: this.state.excelsiorC2 += 1
          });}
          break;
        case "Financial District":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            financialR: this.state.financialR += Number(list.review_scores_rating),
            financialC2: this.state.financialC2 += 1
          });}
          break;
        case "Glen Park":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            glenR: this.state.glenR += Number(list.review_scores_rating),
            glenC2: this.state.glenC2 += 1
          });}
          break;
        case "Haight-Ashbury":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            haightR: this.state.haightR += Number(list.review_scores_rating),
            haightC2: this.state.haightC2 += 1
          });}
          break;
        case "Inner Sunset":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            innerSunR: this.state.innerSunR += Number(list.review_scores_rating),
            innerSunC2: this.state.innerSunC2 += 1
          });}
          break;
        case "Lakeshore":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            lakeShoreR: this.state.lakeShoreR += Number(list.review_scores_rating),
            lakeShoreC2: this.state.lakeShoreC2 += 1
          });}
          break;
        case "Marina":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            marinaR: this.state.marinaR += Number(list.review_scores_rating),
            marinaC2: this.state.marinaC2 += 1
          });}
          break;
        case "Mission District":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            missionR: this.state.missionR += Number(list.review_scores_rating),
            missionC2: this.state.missionC2 += 1
          });}
          break;
        case "Nob Hill":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            nobR: this.state.nobR += Number(list.review_scores_rating),
            nobC2: this.state.nobC2 += 1
          });}
          break;
        case "Noe Valley":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            noeR: this.state.noeR += Number(list.review_scores_rating),
            noeC2: this.state.noeC2 += 1
          });}
          break;
        case "North Beach":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            northR: this.state.northR += Number(list.review_scores_rating),
            northC2: this.state.northC2 += 1
          });}
          break;
        case "Oceanview":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            oceanR: this.state.oceanR += Number(list.review_scores_rating),
            oceanC2: this.state.oceanC2 += 1
          });}
          break;
        case "Richmond District":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            richmondR: this.state.richmondR += Number(list.review_scores_rating),
            richmondC2: this.state.richmondC2 += 1
          });}
          break;
        case "Outer Sunset":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            outersR: this.state.outersR += Number(list.review_scores_rating),
            outersC2: this.state.outersC2 += 1
          });}
          break;
        case "Pacific Heights":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            pacificR: this.state.pacificR += Number(list.review_scores_rating),
            pacificC2: this.state.pacificC2 += 1
          });}
          break;
        case "Parkside":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            parksideR: this.state.parksideR += Number(list.review_scores_rating),
            parksideC2: this.state.parksideC2 += 1
          });}
          break;
        case "Potrero Hill":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            potrHillR: this.state.potrHillR += Number(list.review_scores_rating),
            potrHillC2: this.state.potrHillC2 += 1
          });}
          break;
        case "Presidio Heights":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            presidioR: this.state.presidioR += Number(list.review_scores_rating),
            presidioC2: this.state.presidioC2 += 1
          });}
          break;
        case "Russian Hill":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            russianHillR: this.state.russianHillR += Number(list.review_scores_rating),
            russianHillC2: this.state.russianHillC2 += 1
          });}
          break;
        case "Sea Cliff":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            seaCliffR: this.state.seaCliffR += Number(list.review_scores_rating),
            seaCliffC2: this.state.seaCliffC2 += 1
          });}
          break;
        case "South Beach":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            southBR: this.state.southBR += Number(list.review_scores_rating),
            southBC2: this.state.southBC2 += 1
          });}
          break;
        case "Twin Peaks":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            twinPeaksR: this.state.twinPeaksR += Number(list.review_scores_rating),
            twinPeaksC2: this.state.twinPeaksC2 += 1
          });}
          break;
        case "Visitacion Valley":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            visitR: this.state.visitR += Number(list.review_scores_rating),
            visitC2: this.state.visitC2 += 1
          });}
          break;
        case "West Portal":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            westPortalR: this.state.westPortalR += Number(list.review_scores_rating),
            westPortalC2: this.state.westPortalC2 += 1
          });}
          break;
        case "Western Addition/NOPA":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            westernR: this.state.westernR += Number(list.review_scores_rating),
            westernC2: this.state.westernC2 += 1
          });}
          break;

      }

    })
    return;
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
         <a data-tip data-for='click'> The average rating is a {this.state.y.toFixed(2)} in {this.state.x} </a>
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
        axes
        lineColors={['blue']}
        dataPoints
        axisLabels={{x: 'All Cancellation Policy     (Seacliff has the highest neighbourhood rating)'
        , y: 'All Overall Rating'}}
        grid
        xType={'text'}  interpolate={'cardinal'}
      data={[
        [ {
            x: 'Bayview',
            y: this.state.bayviewR / this.state.bayviewCount2
          }, {
            x: 'Bernal Heighs',
            y: this.state.bernalR / this.state.bernalCount2
          }, {
            x: 'China Town',
            y: this.state.chinaTownR / this.state.chinaTownC2
          }, {
            x: 'Crocker Amazon',
            y: this.state.crockerR / this.state.crockerC2
          }, {
            x: 'Diamond Heights',
            y: this.state.diamondR / this.state.diamondC2
          }, {
            x: 'Downtown',
            y: this.state.downtownR / this.state.downtownC2
          }, {
            x: 'Excelsior',
            y: this.state.excelsiorR / this.state.excelsiorC2
          }, {
            x: 'Financial District',
            y: this.state.financialR / this.state.financialC2
          }, {
            x: 'Glen Park',
            y: this.state.glenR / this.state.glenC2
          }, {
            x: 'Haight-Ashbury',
            y: this.state.haightR / this.state.haightC2
          }, {
            x: 'Inner Sunset',
            y: this.state.innerSunR / this.state.innerSunC2
          }, {
            x: 'Lakeshore',
            y: this.state.lakeShoreR / this.state.lakeShoreC2
          }, {
            x: 'Mission District',
            y: this.state.missionR / this.state.missionC2
          }, {
            x: 'Nob Hill',
            y: this.state.nobR / this.state.nobC2
          }, {
            x: 'Noe Valley',
            y: this.state.noeR / this.state.noeC2
          }, {
            x: 'North Beach',
            y: this.state.northR / this.state.northC2
          }, {
            x: 'Oceanview',
            y: this.state.oceanR / this.state.oceanC2
          }, {
            x: 'Richmond District',
            y: this.state.richmondR / this.state.richmondC2
          }, {
            x: 'Outer Sunset',
            y: this.state.outersR / this.state.outersC2
          }, {
            x: 'Pacific Heights',
            y: this.state.pacificR / this.state.pacificC2
          }, {
            x: 'Parkside',
            y: this.state.parksideR / this.state.parksideC2
          }, {
            x: 'Potrero Hill',
            y: this.state.potrHillR / this.state.potrHillC2
          }, {
            x: 'Presidio Heights',
            y: this.state.presidioR / this.state.presidioC2
          }, {
            x: 'Russian Hill',
            y: this.state.russianHillR / this.state.russianHillC2
          }, {
            x: 'Sea Cliff',
            y: this.state.seaCliffR / this.state.seaCliffC2
          }, {
            x: 'South Beach',
            y: this.state.southBR / this.state.southBC2
          }, {
            x: 'Twin Peaks',
            y: this.state.twinPeaksR / this.state.twinPeaksC2
          }, {
            x: 'Visitacion Valley',
            y: this.state.visitR / this.state.visitC2
          }, {
            x: 'West Portal',
            y: this.state.westPortalR / this.state.westPortalC2
          }, {
            x: 'Western Addition',
            y: this.state.westernR / this.state.westernC2
          }

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

module.exports = NeighbourhoodReviews;
