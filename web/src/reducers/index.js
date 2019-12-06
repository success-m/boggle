import counterReducer from './counter.js';
import isLoggedReducer from './isLogged.js';
import lettersReducer from './letters.js';
import wordKeyReducer from './wordKeyReducer.js';
import wordReducer from './wordReducer.js';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	counterReducer,
	isLoggedReducer,
	lettersReducer,
	wordReducer,
	wordKeyReducer	
});

export default rootReducer;