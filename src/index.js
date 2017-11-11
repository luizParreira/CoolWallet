import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainApp from './view';
import {Provider} from 'react-redux';
import getStore from './state/reducer';

const store = getStore();

console.log(store);
const App = () => (
  <Provider store={store}>
    <MainApp/>
  </Provider>
);

export default App;
