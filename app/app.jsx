var React = require('react');
var ReactDOM = require('react-dom');
import { BrowserRouter, Route, Switch } from 'react-router-dom'
var Main = require('Main')
var Main2 = require('Main2')


//Load foundation
$(document).foundation();


// App css
require('style!css!!sass!applicationStyles');


ReactDOM.render(
  <BrowserRouter>
        <Switch>
  <Route exact path='/' component={Main}/>
  <Route path='/graphs' component={Main2}/>
</Switch>
     </BrowserRouter>

,
  document.getElementById('app')
);
