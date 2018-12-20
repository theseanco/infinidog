import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import * as serviceWorker from './serviceWorker';

import closeWindowReducer from './store/reducers/closeWindowReducer';
import pausePlayReducer from './store/reducers/pausePlayReducer';

const reducerFunction = combineReducers({
  windowClose: closeWindowReducer,
  pausePlay: pausePlayReducer
})

const store = createStore(reducerFunction);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
