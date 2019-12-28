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
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={logo} alt="logo" />
            </Link>
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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
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