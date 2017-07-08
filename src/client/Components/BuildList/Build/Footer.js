import React, { Component } from 'react';
import { Row, Col, Avatar } from 'antd';
import Cancel from './Cancel';

export default class BuildFooter extends Component {
  render() {
    return (
		<Row gutter={0} style={{backgroundColor: '#EFEFFE', padding:'4px' }}>
		  <Col span={1} >
		  	<Avatar size={'small'} src="https://avatars1.githubusercontent.com/u/5320452?v=3&s=460"
		  		 style={{ margin: '5px 10px 0px 5px', float: 'right' }}
		  	 />
		  </Col>
		  <Col span={21} >
		  	<div style={{marginLeft: '2px', marginTop:'4px', float: 'left', lineHeight: '13px'}}>
			  	 <b >user@user.com</b> <br/>
			  	 <span>this is a build </span>
		  	</div>
		  	<div style={{float: 'left', marginTop:'8px', borderLeft: 'solid 1px #DEDEDE', marginLeft: '12px', paddingLeft: '12px' }}>
		  		Triggered via Web API
		  	</div>
		  </Col>
		  <Col span={2} >
		  	<Cancel />
		  </Col>
		</Row>
	)
  }
}