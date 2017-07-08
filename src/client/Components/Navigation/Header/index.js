import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class AppHeader extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      	<Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
            	<b>Navigation 1</b>
            </Menu.Item>
            <Menu.Item key="2">
            	<b>Navigation 1</b>
            </Menu.Item>
            <Menu.Item key="3">
            	<b>Navigation 1</b>
            </Menu.Item>
          </Menu>
   		</Header>
    );
  }
}

export default AppHeader;
