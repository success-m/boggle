import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './store.js';
import { getLetters, initTimer } from './middleware.js';

store.dispatch(getLetters());
store.dispatch(initTimer());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);