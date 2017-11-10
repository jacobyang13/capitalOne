import React, {Component} from 'react';
import ReactDom from 'react-dom';
var uuid = require('node-uuid');
var moment = require('moment');

import Nav from 'Nav'
import DataGraphs from 'DataGraphs'

export class Main2 extends React.Component {
  render() {
    return (
      <div className = "font">
        <Nav/>
        <div>
          <div>
        <DataGraphs/>
          </div>
        </div>
      </div>

    );
  }
};

module.exports = Main2;
