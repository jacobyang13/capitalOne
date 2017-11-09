import React, {Component} from 'react';
import ReactDom from 'react-dom';


//code for creating map and geocoding from http://react.tips/reactjs-and-geocoding/
export default class Map extends React.Component {
  constructor(props){
    super(props);
    this.map = null;
  }


  componentDidMount = () =>{
    this.map = new google.maps.Map(this.mapElement, {
    zoom: 8,
    center: {
      lat: 37.7541839478958,
      lng: -122.4065137873994
    }
  });
  }
  setMapElementReference = (mapElementReference) =>{
    this.mapElement = mapElementReference;
  }

  render(){
    return (
    <div>
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="text" placeholder="Search by Coordinates(Longitude and Latitude eg: 37.75, -122.40)"/>
          <button className="button expanded custom">Search</button>
        </form>
        <p className="center">London, United Kingdom</p>
      </div>
      <div className = "grid-x align-center align-middle">
    <div className="map" ref={this.setMapElementReference} style={{height: '500px', width: '1200px'}}></div>
  </div>
    </div>
    )
  }
}
module.exports = Map;
