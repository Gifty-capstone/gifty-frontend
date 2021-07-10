import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
// Provider connects global state/store to our entire app
import { BrowserRouter } from 'react-router-dom';

const store = createStore (allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
