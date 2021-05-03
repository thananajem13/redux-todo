import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import Rootreducers from './reducre'
import { Provider } from 'react-redux'
const store = createStore(
      Rootreducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>
,document.getElementById('root'));

serviceWorker.unregister();
