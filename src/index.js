import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducers';



const store = createStore(reducer);

ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>, document.getElementById('root'));

