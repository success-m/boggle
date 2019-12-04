import counterReducer from './counter.js';
import isLoggedReducer from './isLogged.js';
import lettersReducer from './letters.js';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	counterReducer,
	isLoggedReducer,
	lettersReducer	
});

export default rootReducer;