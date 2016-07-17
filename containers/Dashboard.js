import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card, Col, Row } from 'antd'


class Dashboard extends Component {

  constructor(props, context) {
    super(props, context)
  }

  componentWillMount() {

  }

  render() {
    const style = {
      height: document.documentElement.clientHeight,
      overflowY: 'auto',
      width: '100%',
      background: '#ECECEC',
      padding: '30px'
    }
    return (
      <div style={style}></div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
