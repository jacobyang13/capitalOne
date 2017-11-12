import React, {Component} from 'react';
import ReactDom from 'react-dom';

import SubTable from 'SubTable'
import SubTableSelected from 'SubTableSelected'
import Map from 'Map'

//renders map and search table here
class SearchMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  renderSubTable = () => {
    return (<SubTable data={this.props.data}/>)
  }

  render()  {
    return (
      <div>
      <Map data ={this.props.data}/>
        <div>
        </div>
        <div>
          <div className="callout">
            {this.renderSubTable()}
          </div>
        </div>
      </div>
              ) }

}
module.exports = SearchMap;
