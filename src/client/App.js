import React, { Component } from 'react';
import AppView from './Components/AppView';
import {Provider} from 'react-redux'
import Store from './store';

import './App.css';

class App extends Component {
  render() {
	return (
	  <div className="App">
		<Provider store={Store}>
			<AppView />
		</Provider>
	  </div>
	);
  }
}

export default App;