import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
// Provider connects global state/store to our entire app
import { BrowserRouter } from 'react-router-dom';

//allReducers is the combined reducers, if we end up having only one we can replace allReducers with friendReducer
//the second parameter is the chrome extension to view redux/store in dev tools
const store = createStore (allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
