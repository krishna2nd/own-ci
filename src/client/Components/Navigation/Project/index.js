import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../../actions/getProjectMenu';

function mapStateToProps(state) {
	return {
		menu: state.menu
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

class ProjectMainMenu extends Component {
  render() {
    return (
      <div className="Application">
        <b> Project Menu </b>
      </div>
    );
  }
}

const ProjectMenu =  connect(mapStateToProps, mapDispatchToProps)(ProjectMainMenu);

export default ProjectMenu;