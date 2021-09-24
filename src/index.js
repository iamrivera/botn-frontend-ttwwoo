import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pocketsReducer from "./reducers/pocketsReducer.js";

import './index.css';
import './bootstrap1.min.css';

const store = createStore(pocketsReducer, applyMiddleware(thunk)); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


