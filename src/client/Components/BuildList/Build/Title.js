import React, { Component } from 'react';
import { Icon, Row, Col } from 'antd';
import Devider from '../../Devider';

//import branch from '../../../views/img/branch.svg'
export default class BuildTitle extends Component {
  statusColor(status) {
  	switch(status) {
  		case 'success' : return 'green';
  		case 'processing' : return 'blue';
  		case 'warning' : return 'orange';
  		case 'error' : return 'red';
  		default: return 'default';
  	}
  }
  render() {
  	const Color = this.statusColor(this.props.status);
    return (
		<Row >
		  <Col span={20} >
		  	<h3 >{this.props.title}</h3>
		  	<div className='details'>
		  		<span>Build #{this.props.id} </span>
		  		<Devider />
		  		<span>
		  			{this.props.source.branch}
		  		</span>
		  		<Devider />
			  	<Icon type={this.props.source.repo.icon} style={{ fontSize: 16, color: Color , marginRight: '4px'}} />
	      		<span style={{ fontWieght: 'normal' }}>{this.props.source.info}</span>
	      	</div>
		  </Col>
		</Row>
	)
  }
}

