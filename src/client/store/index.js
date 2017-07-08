import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import AppReducers from '../reducers';

export const history = createHistory();
const middlewareHistory = routerMiddleware(history);

const Store =createStore(AppReducers, {},
	compose(
			applyMiddleware(middlewareHistory, thunk, promiseMiddleware, logger),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);

export default Store;

