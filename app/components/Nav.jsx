var React = require('react');
var {Link, IndexLink} = require('react-router');
import Logo from 'babel!svg-react!risc-icon.svg';

export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: false
    }
  }
  onSearch(e) {
    e.preventDefault();

  }

  handleOptionChange = (changeEvent) => {
    this.setState({selectedOption: changeEvent.target.value});
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li>
              <div className="adjust">
                <Logo/>
              </div>
            </li>
            <li className="menu-text">
              Jacob Yang
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
module.exports = Nav;
