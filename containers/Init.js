import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SessionActions from '../actions/session';

function loadData(props) {
  props.sessionAction.fetchSession()
}

class Init extends Component {

  componentWillMount() {
    loadData(this.props)
  }

  render() {
    return this.props.children
  }

}

Init.propTypes = {
  session: PropTypes.object,
  sessionAction: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  session: state.session.toJS(),
})

const mapDispatchToProps = (dispatch) => ({
  sessionAction: bindActionCreators(SessionActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Init)
