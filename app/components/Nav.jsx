var React = require('react');
var {Link, IndexLink} = require('react-router');
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
              <div>
                <Logo/>
              </div>
            </li>
            <li className="menu-text">
              <div className = "shift-left">Jacob Yang</div>

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
