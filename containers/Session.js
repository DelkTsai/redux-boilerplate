import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Session extends Component {

  renderUserInfo() {
    return (
      <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                  <a className="dropdown-toggle">
                      <span className="hidden-xs">{this.props.session.session.email}</span>
                  </a>
              </li>
              <li className="dropdown user user-menu">
                  <a className="dropdown-toggle" onClick={this.logout}>
                    <Icon type="logout" />
                  </a>
              </li>
          </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="">
        <header className="main-header">
          <nav className="navbar navbar-static-top" style={{marginLeft: 0}}>
            <div className="navbar-header">
              <a className="logo">
                <span className="logo-mini"><b>Tuice</b></span>
              </a>
            </div>
          </nav>
        </header>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  session: state.session.toJS()
})

export default connect(
  mapStateToProps,
  null,
)(Session);
