import React from 'react';
import App from './view';
import {Provider} from 'react-redux';
import getStore from './state/reducer';

const store = getStore();

export default () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
