import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class AppBreadCrumb extends Component {
	render () {
		return (
			<Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
        )
	}
}

export default AppBreadCrumb;