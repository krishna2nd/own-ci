import React, { Component } from 'react';
import { Button } from 'antd';

export default class Cancel extends Component {
  render() {
    return (
		<Button type="primary" style={{marginTop: '4px', backgroundColor: 'orange', border: 'solid 1px orange'}} >Cancel</Button>
	)
  }
}