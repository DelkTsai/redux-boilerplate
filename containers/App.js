import React, { Component, PropTypes } from 'react'

// 引入 antd 组件
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

export default class App extends Component {

  constructor(props, context) {
    super(props, context)

    // 绑定两个函数的上下文
    this.renderSidebar = this.renderSidebar.bind(this)
    this.handleClickSidebar = this.handleClickSidebar.bind(this)
  }

  // 处理点击导航栏动作 进行跳转
  handleClickSidebar(e) {
    const { dispatch } = this.props
    dispatch(push(e.key))
  }

  // 渲染左导航
  renderSidebar() {
    return (
      <Menu theme="dark"
        defaultOpenKeys={['sub1', 'sub2', 'sub3']}
        mode="inline"
        onClick={this.handleClickSidebar}
      >
        <Menu.Item key="/"> <Icon type="home" />首页</Menu.Item>
        <Menu.Item key="/setting"> <Icon type="setting" />设置</Menu.Item>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
          <Menu.Item key="5">选项5</Menu.Item>
          <Menu.Item key="6">选项6</Menu.Item>
          <SubMenu key="sub3" title="三级导航">
            <Menu.Item key="7">选项7</Menu.Item>
            <Menu.Item key="8">选项8</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    )
  }

  render() {
    // 样式
    const style = {
      backgroundColor: '#404040',
      height: document.documentElement.clientHeight,
      overflowY: 'auto'
    }
    // 此 container 最终渲染的内容
    // this.props.children 指 Router 上挂载的下一级 container
    return (
      <div className="ant-row">
        <div style={style} className="ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-4">
           {this.renderSidebar()}
        </div>
        <div className="main-container ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-20">
          {this.props.children}
        </div>
      </div>
    )
  }
}
