import React, { Component, PropTypes } from 'react'

export default class Header extends Component {
  render() {
    const style = {
      height: '916px'
    }
    return (
      <div className="content-wrapper" style={style}>
        <ul className="nav nav-tabs">
          <li className="active"><a href="#fa-icons">消息</a></li>
          <li><a href="#glyphicons">客户</a></li>
          <li><a href="#glyphicons">报告</a></li>
        </ul>
      </div>
    )
  }
}
