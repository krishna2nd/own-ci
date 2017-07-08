import React, { Component } from 'react';
import { Card } from 'antd';
import BuildTitle from './Title';
import BuildFooter from './Footer';
import BuildStatus from './Status';
import './Title.css';

class Build extends Component {
  render() {
  	const build = this.props.build;
  	const Status = build.status,
  		Title = build.title
    return (
      <Card className='build' bodyStyle={{ padding: 0 }} 
      	title={<BuildTitle title={Title} id={build.id} source={build.source} status={Status} />} 
      	extra={<BuildStatus status={Status} />} 
      	style={{ marginTop: '20px', width: '100%' }}>
        <div>

        </div>
        <BuildFooter />
      </Card>
    );
  }
}

export default Build;
