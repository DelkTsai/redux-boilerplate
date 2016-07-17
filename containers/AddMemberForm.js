import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class AddMemberForm extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      visible: false
    }
  }

  handleSubmit() {
    console.log(this.props.form.getFieldsValue());
    this.hideModal();
  },

  showModal() {
    this.setState({ visible: true });
  },

  hideModal() {
    this.setState({ visible: false });
  },

  renderAdd() {
    return (
      <div style={{display: 'inline-block'}}>
        <Button type="primary" onClick={this.showModal}>添加</Button>
        <Modal title="添加成员"
          visible={this.state.visible}
          onOk={this.handleSubmit}
           onCancel={this.hideModal}
        >
          <Form horizontal form={this.props.form}>
            <FormItem
              {...formItemLayout}
              label="用户名"
            >
              <Input {...getFieldProps('username', {})} type="text" autoComplete="off" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="密码"
            >
              <Input {...getFieldProps('password', {})} type="password" autoComplete="off" />
            </FormItem>
          </Form>
        </Modal>
      </div>

    )
  }
}
