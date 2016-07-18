import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Dashboard extends Component {

  // 初始化
  constructor(props, context) {
    super(props, context)
  }

  // 组件待挂载
  componentWillMount() {

  }

  // 组件已挂载
  componentDidMount() {

  }

  // 组件接收到新的参数
  componentWillReceiveProps() {

  }

  // 组件是否更新
  shouldComponentUpdate() {

  }

  // 组件待更新
  componentWillUpdate() {

  }

  // 组件已更新
  componentDidUpdate() {

  }

  // 组件待卸载
  componentWillUnmount() {

  }

  // 渲染
  render() {
    const style = {
      height: document.documentElement.clientHeight,
      overflowY: 'auto',
      width: '100%',
      background: '#ECECEC',
      padding: '30px'
    }
    return (
      <div style={style}>
        <h1>Dashboard</h1>
      </div>
    )
  }
}

// 绑定 Store 中的状态到当前 container
const mapStateToProps = (state) => ({

})

// 绑定 Action 到当前 container
const mapDispatchToProps = (dispatch) => ({

})

// 绑定
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
