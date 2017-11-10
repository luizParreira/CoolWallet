import {createStore, compose as reduxCompose} from 'redux';
import {combineReducers, install} from 'redux-loop';
import price from './price/reducer';

export default () => {
  const compose = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose;
  // This is where you add more reducers that you want to combine
  // iex. `combineReducers({price, asset, transactions})`
  const reducer = combineReducers({price});
  const enhancer = (compose)(install());
  return createStore(reducer, enhancer);
};
