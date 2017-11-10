import {loop} from 'redux-loop';
import {handleActions} from 'redux-actions';
import {PRICE} from './types';
import {priceRequest} from './cmds';
import priceResponse from './actions';

const initialState = {
  price: null,
  error: null,
  loading: false
};

export default handleActions({
  [PRICE.REQUEST]: state => loop(
    {price: null, loading: true, error: null},
    priceRequest(priceResponse)
  ),

  [PRICE.RESPONSE]: {
    next: (state, {payload}) =>
      console.log('next' + payload) && ({loading: false, price: payload, error: null}),
    throw: (state, {payload}) =>
      console.log('error ' + payload) && ({loading: false, price: null, error: 'Error'})
  }
}, initialState);
