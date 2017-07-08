
import {combineReducers} from 'redux';
import menuReducer from './projectMenu';
import builds from './getBuilds';

const AppReducers = combineReducers({
    menu: menuReducer,
    builds 
});

export default AppReducers;