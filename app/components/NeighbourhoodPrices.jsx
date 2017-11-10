import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BarChart} from 'react-easy-chart';
import ReactTooltip from 'react-tooltip'

export class NeighbourhoodPrices extends React.Component {
  constructor(props) {
    super(props);
    const initialWidth = window.innerWidth > 0 ? window.innerWidth : 500;
     this.handleResize = this.handleResize.bind(this);
    this.state = {
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
            this.setState({
              bayviewPrice: this.state.bayviewPrice += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              bayviewCount: this.state.bayviewCount += 1
            });
            break;
          case "Bernal Heights":
            this.setState({
              bernalPrice: this.state.bernalPrice += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              bernalCount: this.state.bernalCount += 1
            });
            break;
          case "Chinatown":
            this.setState({
              chinaTownP: this.state.chinaTownP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              chinaTownC: this.state.chinaTownC += 1
            });
            break;
          case "Crocker Amazon":
            this.setState({
              crockerP: this.state.crockerP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              crockerC: this.state.crockerC += 1
            });
            break;
          case "Diamond Heights":
            this.setState({
              diamondP: this.state.diamondP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              diamondC: this.state.diamondC += 1
            });
            break;
          case "Downtown":
            this.setState({
              downtownP: this.state.downtownP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              downtownC: this.state.downtownC += 1
            });
            break;
          case "Excelsior":
            this.setState({
              excelsiorP: this.state.excelsiorP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              excelsiorC: this.state.excelsiorC += 1
            });
            break;
          case "Financial District":
            this.setState({
              financialP: this.state.financialP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              financialC: this.state.financialC += 1
            });
            break;
          case "Glen Park":
            this.setState({
              glenP: this.state.glenP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              glenC: this.state.glenC += 1
            });
            break;
          case "Haight-Ashbury":
            this.setState({
              haightP: this.state.haightP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              haightC: this.state.haightC += 1
            });
            break;
          case "Inner Sunset":
            this.setState({
              innerSunP: this.state.innerSunP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              innerSunC: this.state.innerSunC += 1
            });
            break;
          case "Lakeshore":
            this.setState({
              lakeShoreP: this.state.lakeShoreP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              lakeShoreC: this.state.lakeShoreC += 1
            });
            break;
          case "Marina":
            this.setState({
              marinaP: this.state.marinaP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              marinaC: this.state.marinaC += 1
            });
            break;
          case "Mission District":
            this.setState({
              missionP: this.state.missionP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              missionC: this.state.missionC += 1
            });
            break;
          case "Nob Hill":
            this.setState({
              nobP: this.state.nobP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              nobC: this.state.nobC += 1
            });
            break;
          case "Noe Valley":
            this.setState({
              noeP: this.state.noeP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              noeC: this.state.noeC += 1
            });
            break;
          case "North Beach":
            this.setState({
              northP: this.state.northP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              northC: this.state.northC += 1
            });
            break;
          case "Oceanview":
            this.setState({
              oceanP: this.state.oceanP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              oceanC: this.state.oceanC += 1
            });
            break;
          case "Richmond District":
            this.setState({
              richmondP: this.state.richmondP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              richmondC: this.state.richmondC += 1
            });
            break;
          case "Outer Sunset":
            this.setState({
              outersP: this.state.outersP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              outersC: this.state.outersC += 1
            });
            break;
          case "Pacific Heights":
            this.setState({
              pacificP: this.state.pacificP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              pacificC: this.state.pacificC += 1
            });
            break;
          case "Parkside":
            this.setState({
              parksideP: this.state.parksideP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              parksideC: this.state.parksideC += 1
            });
            break;
          case "Potrero Hill":
            this.setState({
              potrHillP: this.state.potrHillP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              potrHillC: this.state.potrHillC += 1
            });
            break;
          case "Presidio Heights":
            this.setState({
              presidioP: this.state.presidioP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              presidioC: this.state.presidioC += 1
            });
            break;
          case "Russian Hill":
            this.setState({
              russianHillP: this.state.russianHillP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              russianHillC: this.state.russianHillC += 1
            });
            break;
          case "Sea Cliff":
            this.setState({
              seaCliffP: this.state.seaCliffP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              seaCliffC: this.state.seaCliffC += 1
            });
            break;
          case "South Beach":
            this.setState({
              southBP: this.state.southBP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              southBC: this.state.southBC += 1
            });
            break;
          case "Twin Peaks":
            this.setState({
              twinPeaksP: this.state.twinPeaksP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              twinPeaksC: this.state.twinPeaksC += 1
            });
            break;
          case "Visitacion Valley":
            this.setState({
              visitP: this.state.visitP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              visitC: this.state.visitC += 1
            });
            break;
          case "West Portal":
            this.setState({
              westPortalP: this.state.westPortalP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              westPortalC: this.state.westPortalC += 1
            });
            break;
          case "Western Addition/NOPA":
            this.setState({
              westernP: this.state.westernP += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
              westernC: this.state.westernC += 1
            });
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
           <a className = "center" data-tip data-for='click'> The average price is ${this.state.y.toFixed(2)} in {this.state.x} </a>
     </div>
       )
     }
   }
  render() {

      return (
        <div className = "grid-x align-center">
          <div className = "cell">
            <div ref = "component">
            <BarChart width = {this.state.componentWidth} height = {this.state.componentWidth / 2} colorBars grid axes yDomainRange={[0, 570]}  axisLabels={{
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
      clickHandler = {this.clickHandler.bind(this)}/>
    </div>

  </div>
      {this.createTooltip()}
  </div>)
    }
}

module.exports = NeighbourhoodPrices;
