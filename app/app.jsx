var React = require('react');
var ReactDOM = require('react-dom');
var{Route, Router, IndexRoute, hashHistory} = require('react-router');
import { BrowserRouter } from 'react-router-dom'


var Main = require('Main')


//Load foundation
$(document).foundation();


// App css
require('style!css!!sass!applicationStyles');


ReactDOM.render(
  <BrowserRouter>
  <Main/>
</BrowserRouter>
,
  document.getElementById('app')
);
