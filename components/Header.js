import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  render() {

    return (
      <header className="main-header">
          <a className="logo">
              <span className="logo-mini"><b>T</b></span>
              <span className="logo-lg"><b>Tuice</b></span>
          </a>
          <nav className="navbar navbar-static-top" role="navigation">
              <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                  <span className="sr-only">Toggle navigation</span>
              </a>
          </nav>
      </header>
    )
  }
}
