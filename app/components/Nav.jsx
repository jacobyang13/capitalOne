import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Logo from 'babel!svg-react!unc.svg';

export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className= "shrinkS">
                <Logo/>
            </li>
            <li className="menu-text">
              <div className = "shift-left">Jacob Yang</div>
            </li>
            <li>
            <Link to='/'><div className = "customW">Home</div></Link>
            </li>
            <li>
            <Link to='/graphs'><div className = "customW">Data Graphs</div></Link>
            </li>

          </ul>
        </div>
        <div className = "top-bar-right">
          <ul className = 'menu'>
          <li className = "menu-text">
            Capital One Airbnb Challenge
          </li>
        </ul>
      </div>
    </div>
    )
  }
}
module.exports = Nav;
