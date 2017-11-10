import React, {Component} from 'react';
import ReactDom from 'react-dom';
var INITIAL_MAP_ZOOM_LEVEL = 12;
var INITIAL_LOCATION = {
  address: 'Mission District, San Francisco',
  position: {
    latitude: 37.7541839478958,
    longitude: -122.4065137873994
  }
}
var ATLANTIC_OCEAN = {
  latitude: 29.532804,
  longitude: -55.491477
};

//code for creating map and geocoding from http://react.tips/reactjs-and-geocoding/
export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.state = {
      isGeocodingError: false,
      foundAddress: INITIAL_LOCATION.address,
      data: [],
      weekPrice: 0.00,
      weekPriceCount: 0.00,
      averageWeekPrice: 0.00,
      hasSearched: false,
      search: ""
    };
  }

  //handles search bar submissions- changes geolocation
  geocodeAddress = (address) => {
    this.geocoder.geocode({
      'address': address
    }, function handleResults(results, status) {

      //if successful
      if (status === google.maps.GeocoderStatus.OK) {
        this.setState({
               foundAddress: results[0].formatted_address,
               isGeocodingError: false
             });

             this.map.setCenter(results[0].geometry.location);
             this.marker.setPosition(results[0].geometry.location);

             return;
      }
      //otherwise error
      this.setState({
      foundAddress: null,
      isGeocodingError: true
    });

      //if error, sets map to ocean
      this.map.setCenter({lat: ATLANTIC_OCEAN.latitude, lng: ATLANTIC_OCEAN.longitude});

      this.marker.setPosition({lat: ATLANTIC_OCEAN.latitude, lng: ATLANTIC_OCEAN.longitude});

    }.bind(this));
  }
  //search bar handler
  handleSubmit = e => {
    e.preventDefault();
    var address = this.searchInputElement.value;
    if(this.state.search !== address){
      //sets the state to search to trigger new return content
      this.setState({hasSearched: true, search: address})
      //for some reason this.setState was unable to successfully change the price. Had to do it this way... not recommended...
      this.state.weekPrice = 0; this.state.weekPriceCount = 0; this.state.averageWeekPrice = 0;

      this.geocodeAddress(address);
      this.calculatePrice(address);


    }



  }
  //price estimation method based on geolocation
  calculatePrice = (address) =>{
      var latlngStr = address.split(',', 2)
      var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};

      var searchLat = latlng.lat.toFixed(2);
      var searchLong = latlng.lng.toFixed(2);
      var  weekPrice = this.state.data.filter((list) => {
          var listLati = parseFloat(list.latitude).toFixed(2)
          var listLongi = parseFloat(list.longitude).toFixed(2)
          if(searchLat === listLati && searchLong === listLongi){
              if(list.price !== "" || null){
            this.setState({
          weekPrice: this.state.weekPrice += parseFloat(list.price.replace(/[^0-9.-]+/g, '')),
          weekPriceCount: this.state.weekPriceCount +=1
        });
      }

        }


  })
  this.setState({averageWeekPrice: this.state.weekPrice * 7/ this.state.weekPriceCount})
}




  //mounts map
  componentDidMount = () => {
    this.map = new google.maps.Map(this.mapElement, {
      zoom: INITIAL_MAP_ZOOM_LEVEL,
      center: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    });
    this.marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    })
    this.geocoder = new google.maps.Geocoder();
    var tempData = this.props.data
    this.setState({data : tempData})
  }

  //sets ref that is used in return method
  setSearchInputElementReference = (inputReference) => {
    this.searchInputElement = inputReference;
  }

  setMapElementReference = (mapElementReference) => {
    this.mapElement = mapElementReference;
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="address" ref={this.setSearchInputElementReference} placeholder="Search by Coordinates(Longitude and Latitude eg: 37.75, -122.40)"/>
            <button className="button expanded custom">Search</button>
          </form>
          {this.state.isGeocodingError
            ? <p className="center">Address not found.</p>
            : <p className="center">{this.state.foundAddress}</p>
          }
        </div>
        <div>
          <p className = "center"> {this.state.hasSearched === false ? <p>Your weekly average income will be displayed upon searching</p>
            : this.state.weekPriceCount === 0 ? <p>Could not calculate weekly average income due to searching outside data geolocation or not correctly typing in geolocation</p> :
            <p>Your weekly average income will be around ${this.state.averageWeekPrice.toFixed(2)}</p>}
          </p>
        </div>

        <div className="grid-x align-center align-middle">
          <div className="map" ref={this.setMapElementReference} style={{
            height: '500px',
            width: '1200px'
          }}></div>
        </div>
      </div>
    );
  }
}
module.exports = Map;
