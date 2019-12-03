import counterReducer from './counter.js';
import isLoggedReducer from './isLogged.js';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	counterReducer,
	isLoggedReducer	
});

export default rootReducer;