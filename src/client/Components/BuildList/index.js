import React, { Component } from 'react';
import Build from './Build';

class BuildList extends Component {
  render() {
    return (
      <div>
      {(this.props.builds || []).map((build) => (<Build key={build.id} build={build} />)) }
      </div>
    );
  }
}

export default BuildList;
