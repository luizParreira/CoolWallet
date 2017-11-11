import {loop} from 'redux-loop';
import {handleActions} from 'redux-actions';
import {PRICE} from './types';
import {priceRequest} from './cmds';

const initialState = {
  price: null,
  error: null,
  loading: false
};

export default handleActions({
  [PRICE.REQUEST]: state => loop(
    {price: null, loading: true, error: null},
    priceRequest
  ),

  [PRICE.RESPONSE]: {
    next: (state, {payload}) =>
      ({loading: false, price: payload, error: null}),
    throw: (state, {payload}) =>
      ({loading: false, price: null, error: 'Error'})
  }
}, initialState);
