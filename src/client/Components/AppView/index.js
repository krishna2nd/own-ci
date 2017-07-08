import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AppHeader from '../Navigation/Header'
//import Footer from '../Navigation/Footer'
//import Project from '../Navigation/Project'
import SideMenu from '../Navigation/Side'
import AppBreadCrumb from '../Navigation/BreadCrumb'
import BuildList from '../BuildList'
import * as actionCreators from '../../actions/getBuilds';

const { Content, Sider } = Layout;

function mapStateToProps(state) {
  return {
    menu: state.menu,
    builds: state.builds
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

class MainAppView extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <AppHeader/>
        <Layout>
          <Sider 
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width={200} style={{ background: '#fff' }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <SideMenu />
          </Sider>
          <Layout style={{ padding: '0px 10px 10px 10px' }}>
            <AppBreadCrumb />
            <Content style={{ background: '#fff', padding: 20, margin: 0, minHeight: (window.screen.availHeight - 100) }}>
              <BuildList builds={this.props.builds} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

const AppView =  connect(mapStateToProps, mapDispatchToProps)(MainAppView);
export default AppView;
