import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { reducer } from './store/reducers';



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>, document.getElementById('root'));

