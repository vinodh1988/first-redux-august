import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { appstate } from './Redux/reducers/appstate';
import { Provider } from 'react-redux';

const store = createStore(appstate)
ReactDOM.render(
 <Provider store = {store}> <App /></Provider>  ,
  document.getElementById('root')
);


serviceWorker.unregister();
