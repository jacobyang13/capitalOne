import React, {Component} from 'react';
import ReactDom from 'react-dom';
const apiBaseUrl = "http://localhost:3000/api/";
// const apiBaseUrl = "http://capitalone-jacob-yang.herokuapp.com/api/";
import request from 'superagent';
import axios from 'axios';
import {BarChart} from 'react-easy-chart';
import {LineChart} from 'react-easy-chart';
import Logo from 'babel!svg-react!unc.svg';

class DataTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: "loading...",

      bayviewPrice: 0.00,
      bayviewCount: 0.00,
      bernalPrice: 0.00,
      bernalCount: 0.00,
      chinaTownP: 0.00,
      chinaTownC: 0.00,
      crockerP: 0.00,
      crockerC: 0.00,
      diamondP: 0.00,
      diamondC: 0.00,
      downtownP: 0.00,
      downtownC: 0.00,
      excelsiorP: 0.00,
      excelsiorC: 0.00,
      financialP: 0.00,
      financialC: 0.00,
      glenP: 0.00,
      glenC: 0.00,
      haightP: 0.00,
      haightC: 0.00,
      innerSunP: 0.00,
      innerSunC: 0.00,
      lakeShoreP: 0.00,
      lakeShoreC: 0.00,
      marinaP: 0.00,
      marinaC: 0.00,
      missionP: 0.00,
      missionC: 0.00,
      nobP: 0.00,
      nobC: 0.00,
      noeP: 0.00,
      noeC: 0.00,
      northP: 0.00,
      northC: 0.00,
      oceanP: 0.00,
      oceanC: 0.00,
      richmondP: 0.00,
      richmondC: 0.00,
      outersP: 0.00,
      outersC: 0.00,
      pacificP: 0.00,
      pacificC: 0.00,
      parksideP: 0.00,
      parksideC: 0.00,
      potrHillP: 0.00,
      potrHillC: 0.00,
      presidioP: 0.00,
      presidioC: 0.00,
      russianHillP: 0.00,
      russianHillC: 0.00,
      seaCliffP: 0.00,
      seaCliffC: 0.00,
      southBP: 0.00,
      southBC: 0.00,
      twinPeaksP: 0.00,
      twinPeaksC: 0.00,
      visitP: 0.00,
      visitC: 0.00,
      westPortalP: 0.00,
      westPortalC: 0.00,
      westernP: 0.00,
      westernC: 0.00,
      showToolTip: false,
      top: "",
      left: "",
      y: "",
      x: "",

      cancelStrictScore: 0,
      cancelModerateScore:0,
      cancelFlexibleScore: 0,
      cancelStrictCount: 0.00,
      cancelModerateCount: 0,
      cancelFlexibleCount: 0,

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

      this.setState({listingsDataTemp: data});

    })
    setTimeout(function() {
      // this.getAverage();
      // this.getReviews();
      this.getNbReviews();
      this.setState({start: ""});
    }.bind(this), 10000)

  }
  getNbReviews = () => {
    var tempData3 = this.state.listingsDataTemp;
    tempData3 = tempData3.map((list) => {
      switch (list.neighbourhood) {
        case "Bayview":
          if(list.review_scores_rating !== "" || null){
          this.setState({
            bayviewR: this.state.bayviewR += Number(list.review_scores_rating),
            bayviewCount2: this.state.bayviewCount2 + 1
          }); }
          break;
        case "Bernal Heights":
          if(list.review_scores_rating !== "" || null){
          this.setState({
            bernalR: this.state.bernalR += Number(list.review_scores_rating),
            bernalCount2: this.state.bernalCount2 + 1
          });}
          break;
        case "Chinatown":
          if(list.review_scores_rating !== "" || null){
          this.setState({
            chinaTownR: this.state.chinaTownR += Number(list.review_scores_rating),
            chinaTownC2: this.state.chinaTownC2 + 1
          });}
          break;
        case "Crocker Amazon":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            crockerR: this.state.crockerR += Number(list.review_scores_rating),
            crockerC2: this.state.crockerC2 + 1
          });}
          break;
        case "Diamond Heights":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            diamondR: this.state.diamondR += Number(list.review_scores_rating),
            diamondC2: this.state.diamondC2 + 1
          });}
          break;
        case "Downtown":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            downtownR: this.state.downtownR += Number(list.review_scores_rating),
            downtownC2: this.state.downtownC2 + 1
          });}
          break;
        case "Excelsior":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            excelsiorR: this.state.excelsiorR += Number(list.review_scores_rating),
            excelsiorC2: this.state.excelsiorC2 + 1
          });}
          break;
        case "Financial District":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            financialR: this.state.financialR += Number(list.review_scores_rating),
            financialC2: this.state.financialC2 + 1
          });}
          break;
        case "Glen Park":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            glenR: this.state.glenR += Number(list.review_scores_rating),
            glenC2: this.state.glenC2 + 1
          });}
          break;
        case "Haight-Ashbury":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            haightR: this.state.haightR += Number(list.review_scores_rating),
            haightC2: this.state.haightC2 + 1
          });}
          break;
        case "Inner Sunset":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            innerSunR: this.state.innerSunR += Number(list.review_scores_rating),
            innerSunC2: this.state.innerSunC2 + 1
          });}
          break;
        case "Lakeshore":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            lakeShoreR: this.state.lakeShoreR += Number(list.review_scores_rating),
            lakeShoreC2: this.state.lakeShoreC2 + 1
          });}
          break;
        case "Marina":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            marinaR: this.state.marinaR += Number(list.review_scores_rating),
            marinaC2: this.state.marinaC2 + 1
          });}
          break;
        case "Mission District":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            missionR: this.state.missionR += Number(list.review_scores_rating),
            missionC2: this.state.missionC2 + 1
          });}
          break;
        case "Nob Hill":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            nobR: this.state.nobR += Number(list.review_scores_rating),
            nobC2: this.state.nobC2 + 1
          });}
          break;
        case "Noe Valley":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            noeR: this.state.noeR += Number(list.review_scores_rating),
            noeC2: this.state.noeC2 + 1
          });}
          break;
        case "North Beach":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            northR: this.state.northR += Number(list.review_scores_rating),
            northC2: this.state.northC2 + 1
          });}
          break;
        case "Oceanview":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            oceanR: this.state.oceanR += Number(list.review_scores_rating),
            oceanC2: this.state.oceanC2 + 1
          });}
          break;
        case "Richmond District":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            richmondR: this.state.richmondR += Number(list.review_scores_rating),
            richmondC2: this.state.richmondC2 + 1
          });}
          break;
        case "Outer Sunset":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            outersR: this.state.outersR += Number(list.review_scores_rating),
            outersC2: this.state.outersC2 + 1
          });}
          break;
        case "Pacific Heights":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            pacificR: this.state.pacificR += Number(list.review_scores_rating),
            pacificC2: this.state.pacificC2 + 1
          });}
          break;
        case "Parkside":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            parksideR: this.state.parksideR += Number(list.review_scores_rating),
            parksideC2: this.state.parksideC2 + 1
          });}
          break;
        case "Potrero Hill":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            potrHillR: this.state.potrHillR += Number(list.review_scores_rating),
            potrHillC2: this.state.potrHillC2 + 1
          });}
          break;
        case "Presidio Heights":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            presidioR: this.state.presidioR += Number(list.review_scores_rating),
            presidioC2: this.state.presidioC2 + 1
          });}
          break;
        case "Russian Hill":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            russianHillR: this.state.russianHillR += Number(list.review_scores_rating),
            russianHillC2: this.state.russianHillC2 + 1
          });}
          break;
        case "Sea Cliff":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            seaCliffR: this.state.seaCliffR += Number(list.review_scores_rating),
            seaCliffC2: this.state.seaCliffC2 + 1
          });}
          break;
        case "South Beach":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            southBR: this.state.southBR += Number(list.review_scores_rating),
            southBC2: this.state.southBC2 + 1
          });}
          break;
        case "Twin Peaks":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            twinPeaksR: this.state.twinPeaksR += Number(list.review_scores_rating),
            twinPeaksC2: this.state.twinPeaksC2 + 1
          });}
          break;
        case "Visitacion Valley":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            visitR: this.state.visitR += Number(list.review_scores_rating),
            visitC2: this.state.visitC2 + 1
          });}
          break;
        case "West Portal":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            westPortalR: this.state.westPortalR += Number(list.review_scores_rating),
            westPortalC2: this.state.westPortalC2 + 1
          });}
          break;
        case "Western Addition/NOPA":
        if(list.review_scores_rating !== "" || null){
          this.setState({
            westernR: this.state.westernR += Number(list.review_scores_rating),
            westernC2: this.state.westernC2 + 1
          });}
          break;

      }

    })
    return;
  }
  renderLineNBChart = () => {
    return(
      <LineChart
        width={1300}
        height={500}
        axes
        dataPoints
        axisLabels={{x: 'All Cancellation Policy     (Seacliff has the highest neighbourhood rating)'
        , y: 'All Overall Rating'}}
        grid
        margin={{top: 10, right: 0, bottom: 50, left: 65}}
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
    />

    )
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
        <td>{item.reviews_per_month}</td>
        <td>{item.cancellation_policy}</td>
        <td>{item.review_scores_rating}</td>
      </tr>
    )));

  }

  renderData = () => {
    return (
      <div>
        <div>

        <div>
          <div>
              {this.renderLineNBChart()}
          </div>

        </div>
        <div>
          {/* {this.renderLineReviewChart()} */}
        </div>
        <div>
          {/* {this.renderBarChart()} */}
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
/*
getReviews = () =>{
    var tempData1 = this.state.listingsDataTemp;
    tempData1 = tempData1.map((list) =>{
      switch(list.cancellation_policy){
        case "strict":
          if(list.review_scores_rating !== "" || null){
          this.setState({
            cancelStrictScore: this.state.cancelStrictScore += Number(list.review_scores_rating),
             cancelStrictCount: this.state.cancelStrictCount + 1 });}
          break;
          case "moderate":
          if(list.review_scores_rating !== "" || null){
          this.setState({
            cancelModerateScore: this.state.cancelModerateScore += Number(list.review_scores_rating),
             cancelModerateCount: this.state.cancelModerateCount + 1 })}
          break;
          case "flexible":
          if(list.review_scores_rating !== "" || null){
          this.setState({
              cancelFlexibleScore: this.state.cancelFlexibleScore += Number(list.review_scores_rating),
             cancelFlexibleCount: this.state.cancelFlexibleCount + 1 })}
          break;

      }
    })
}
renderLineReviewChart = () => {
  return(
    <LineChart
      width={1000}
      height={500}
      axes
      dataPoints
      axisLabels={{x: 'All Cancellation Policy', y: 'All Overall Rating'}}
      grid
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
} */
/*
getAverage = () => {
  var tempData = this.state.listingsDataTemp;
  tempData = tempData.map((list) => {
    switch (list.neighbourhood) {
      case "Bayview":
        this.setState({
          bayviewPrice: this.state.bayviewPrice += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          bayviewCount: this.state.bayviewCount + 1
        });
        break;
      case "Bernal Heights":
        this.setState({
          bernalPrice: this.state.bernalPrice += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          bernalCount: this.state.bernalCount + 1
        });
        break;
      case "Chinatown":
        this.setState({
          chinaTownP: this.state.chinaTownP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          chinaTownC: this.state.chinaTownC + 1
        });
        break;
      case "Crocker Amazon":
        this.setState({
          crockerP: this.state.crockerP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          crockerC: this.state.crockerC + 1
        });
        break;
      case "Diamond Heights":
        this.setState({
          diamondP: this.state.diamondP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          diamondC: this.state.diamondC + 1
        });
        break;
      case "Downtown":
        this.setState({
          downtownP: this.state.downtownP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          downtownC: this.state.downtownC + 1
        });
        break;
      case "Excelsior":
        this.setState({
          excelsiorP: this.state.excelsiorP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          excelsiorC: this.state.excelsiorC + 1
        });
        break;
      case "Financial District":
        this.setState({
          financialP: this.state.financialP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          financialC: this.state.financialC + 1
        });
        break;
      case "Glen Park":
        this.setState({
          glenP: this.state.glenP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          glenC: this.state.glenC + 1
        });
        break;
      case "Haight-Ashbury":
        this.setState({
          haightP: this.state.haightP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          haightC: this.state.haightC + 1
        });
        break;
      case "Inner Sunset":
        this.setState({
          innerSunP: this.state.innerSunP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          innerSunC: this.state.innerSunC + 1
        });
        break;
      case "Lakeshore":
        this.setState({
          lakeShoreP: this.state.lakeShoreP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          lakeShoreC: this.state.lakeShoreC + 1
        });
        break;
      case "Marina":
        this.setState({
          marinaP: this.state.marinaP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          marinaC: this.state.marinaC + 1
        });
        break;
      case "Mission District":
        this.setState({
          missionP: this.state.missionP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          missionC: this.state.missionC + 1
        });
        break;
      case "Nob Hill":
        this.setState({
          nobP: this.state.nobP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          nobC: this.state.nobC + 1
        });
        break;
      case "Noe Valley":
        this.setState({
          noeP: this.state.noeP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          noeC: this.state.noeC + 1
        });
        break;
      case "North Beach":
        this.setState({
          northP: this.state.northP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          northC: this.state.northC + 1
        });
        break;
      case "Oceanview":
        this.setState({
          oceanP: this.state.oceanP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          oceanC: this.state.oceanC + 1
        });
        break;
      case "Richmond District":
        this.setState({
          richmondP: this.state.richmondP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          richmondC: this.state.richmondC + 1
        });
        break;
      case "Outer Sunset":
        this.setState({
          outersP: this.state.outersP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          outersC: this.state.outersC + 1
        });
        break;
      case "Pacific Heights":
        this.setState({
          pacificP: this.state.pacificP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          pacificC: this.state.pacificC + 1
        });
        break;
      case "Parkside":
        this.setState({
          parksideP: this.state.parksideP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          parksideC: this.state.parksideC + 1
        });
        break;
      case "Potrero Hill":
        this.setState({
          potrHillP: this.state.potrHillP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          potrHillC: this.state.potrHillC + 1
        });
        break;
      case "Presidio Heights":
        this.setState({
          presidioP: this.state.presidioP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          presidioC: this.state.presidioC + 1
        });
        break;
      case "Russian Hill":
        this.setState({
          russianHillP: this.state.russianHillP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          russianHillC: this.state.russianHillC + 1
        });
        break;
      case "Sea Cliff":
        this.setState({
          seaCliffP: this.state.seaCliffP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          seaCliffC: this.state.seaCliffC + 1
        });
        break;
      case "South Beach":
        this.setState({
          southBP: this.state.southBP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          southBC: this.state.southBC + 1
        });
        break;
      case "Twin Peaks":
        this.setState({
          twinPeaksP: this.state.twinPeaksP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          twinPeaksC: this.state.twinPeaksC + 1
        });
        break;
      case "Visitacion Valley":
        this.setState({
          visitP: this.state.visitP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          visitC: this.state.visitC + 1
        });
        break;
      case "West Portal":
        this.setState({
          westPortalP: this.state.westPortalP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          westPortalC: this.state.westPortalC + 1
        });
        break;
      case "Western Addition/NOPA":
        this.setState({
          westernP: this.state.westernP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          westernC: this.state.westernC + 1
        });
        break;

    }

  })
  return;

}

renderBarChart = () => {

  return (<BarChart width = {1200} height = {520} colorBars grid axes yDomainRange={[0, 570]} margin={{top: 0, right: 0, bottom: 50, left: 65}} axisLabels={{
    x: 'Neighbourhoods',
    y: 'Average price'
  }} data={[
    {
      x: 'Bayview',
      y: this.state.bayviewPrice / this.state.bayviewCount
    }, {
      x: 'Bernal Heighs',
      y: this.state.bernalPrice / this.state.bernalCount
    }, {
      x: 'China Town',
      y: this.state.chinaTownP / this.state.chinaTownC
    }, {
      x: 'Crocker Amazon',
      y: this.state.crockerP / this.state.crockerC
    }, {
      x: 'Diamond Heights',
      y: this.state.diamondP / this.state.diamondC
    }, {
      x: 'Downtown',
      y: this.state.downtownP / this.state.downtownC
    }, {
      x: 'Excelsior',
      y: this.state.excelsiorP / this.state.excelsiorC
    }, {
      x: 'Financial District',
      y: this.state.financialP / this.state.financialC
    }, {
      x: 'Glen Park',
      y: this.state.glenP / this.state.glenC
    }, {
      x: 'Haight-Ashbury',
      y: this.state.haightP / this.state.haightC
    }, {
      x: 'Inner Sunset',
      y: this.state.innerSunP / this.state.innerSunC
    }, {
      x: 'Lakeshore',
      y: this.state.lakeShoreP / this.state.lakeShoreC
    }, {
      x: 'Mission District',
      y: this.state.missionP / this.state.missionC
    }, {
      x: 'Nob Hill',
      y: this.state.nobP / this.state.nobC
    }, {
      x: 'Noe Valley',
      y: this.state.noeP / this.state.noeC
    }, {
      x: 'North Beach',
      y: this.state.northP / this.state.northC
    }, {
      x: 'Oceanview',
      y: this.state.oceanP / this.state.oceanC
    }, {
      x: 'Richmond District',
      y: this.state.richmondP / this.state.richmondC
    }, {
      x: 'Outer Sunset',
      y: this.state.outersP / this.state.outersC
    }, {
      x: 'Pacific Heights',
      y: this.state.pacificP / this.state.pacificC
    }, {
      x: 'Parkside',
      y: this.state.parksideP / this.state.parksideC
    }, {
      x: 'Potrero Hill',
      y: this.state.potrHillP / this.state.potrHillC
    }, {
      x: 'Presidio Heights',
      y: this.state.presidioP / this.state.presidioC
    }, {
      x: 'Russian Hill',
      y: this.state.russianHillP / this.state.russianHillC
    }, {
      x: 'Sea Cliff',
      y: this.state.seaCliffP / this.state.seaCliffC
    }, {
      x: 'South Beach',
      y: this.state.southBP / this.state.southBC
    }, {
      x: 'Twin Peaks',
      y: this.state.twinPeaksP / this.state.twinPeaksC
    }, {
      x: 'Visitacion Valley',
      y: this.state.visitP / this.state.visitC
    }, {
      x: 'West Portal',
      y: this.state.westPortalP / this.state.westPortalC
    }, {
      x: 'Western Addition',
      y: this.state.westernP / this.state.westernC
    }
  ]}
  mouseOverHandler={this.mouseOverHandler}
  mouseOutHandler={this.mouseOutHandler}
  mouseMoveHandler={this.mouseMoveHandler}/>)
} */

export default DataTable;
