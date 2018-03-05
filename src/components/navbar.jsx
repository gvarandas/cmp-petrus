/* eslint-env browser */
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.navLinks = [
      { name: 'Home', link: '/' },
      { name: 'Agenda', link: '/agenda' },
    ];
  }
  renderLink() {
    const activeLink = window.location.pathname;
    return this.navLinks.map(navLink => (
      <li className="nav-item" key={navLink.name}>
        <Link
          className={`nav-link ${navLink.link === activeLink ? 'active' : ''}`}
          to={navLink.link}
        >
          {navLink.name}
        </Link>
      </li>
    ));
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <Link className="navbar-brand" to="/">CMP</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {this.renderLink()}
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">Disabled</a>
            </li> */}
          </ul>
        </div>

      </nav>
    );
  }
}

export default NavBar;
