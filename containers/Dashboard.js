import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MessageActions from '../actions/message';

function loadData(props) {
  props.messageAction.fetchMessage()
}

class Dashboard extends Component {

  constructor(props, context) {
    super(props, context)
    this.renderList = this.renderList.bind(this)
  }

  componentWillMount() {
    loadData(this.props)
  }

  renderList(e) {
    return <li key={e.id}>{e.id}</li>
  }

  render() {
    const { entities, read } = this.props.message
    return (
      <div>
        <ul>
        {read.isSuccessed && entities.map(this.renderList) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  message: state.message.toJS()
})

const mapDispatchToProps = (dispatch) => ({
  messageAction: bindActionCreators(MessageActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
