var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import Nav from 'Nav'
import DataTable from 'DataTable'

export class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <div>
          <div>
          <DataTable/>
          </div>
        </div>
      </div>

    );
  }
};

module.exports = Main;
