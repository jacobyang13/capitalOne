import React, {Component} from 'react';
import ReactDom from 'react-dom';
var uuid = require('node-uuid');
var moment = require('moment');

import Nav from 'Nav'
import DataTable from 'DataTable'

export class Main extends React.Component {
  render() {
    return (
      <div className = "font">
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
