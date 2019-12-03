import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';

import rootReducer from './reducers';

//Action
const increment = () => {
  return {
    type : 'INCREMENT'
  }
}

const descrement = () => {
  return {
    type : 'DECREMENT'
  }
}

//store
let store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(descrement());


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();