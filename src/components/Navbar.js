import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import logo from '../img/logo.jpeg'

class Navbar extends React.Component {
  constructor() {
    super()

    this.state = {
      navbarOpen: true
    }

    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        navbarOpen: true
      })
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div>
            <h4>Improving</h4>
            <h4>People Management</h4>
            <h4>Skills and Systems</h4>
          </div>
          <button
            className={`navbar-toggler ${
              this.state.navbarOpen ? '' : 'collapsed'
            }`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`navbar-collapse ${
              this.state.navbarOpen ? 'collapse' : ''
            }`}
            id="navbarText"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/consultancy">
                  Consultancy and Training
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/management">
                  Interim Management
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(Navbar)