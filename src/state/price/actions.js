import {createAction} from 'redux-actions';
import {PRICE} from './types';

export const priceRequest = createAction(PRICE.REQUEST, () => null);
export const priceResponse = createAction(
  PRICE.RESPONSE, ({ok, data}) =>
    ok ? data[0] : new Error('Couldnt fectch data')
);
