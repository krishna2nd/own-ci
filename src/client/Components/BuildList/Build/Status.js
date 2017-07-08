import React, { Component } from 'react';
import { Badge } from 'antd';

export default class BuildStatus extends Component {

  render() {
  	let Status = this.props.status;
    return (
    	<div>
    	<span style={{marginRight:'8px'}} >Passed in 14m 59s </span>
    	<Badge status={Status} />
    	</div>
	)
  }
}