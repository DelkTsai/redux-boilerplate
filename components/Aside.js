import React, { Component, PropTypes } from 'react'

export default class Header extends Component {
  render() {
    const style = {
      height: 'auto'
    }
    return (
      <aside className="main-sidebar">
          <section className="sidebar" style={style}>
          <ul className="sidebar-menu">
            <li className="header">社交账号</li>
            <li className="active">
              <div className="user-panel">
                <div className="pull-left image">
                    <img src="https://avatars3.githubusercontent.com/u/4095888?v=3&s=140" className="img-circle" alt="User Image" />
                </div>
                <div className="pull-left info">
                    <p>Alexander Pierce</p>
                    <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                </div>
              </div>
            </li>
          </ul>
          </section>
      </aside>
    )
  }
}

