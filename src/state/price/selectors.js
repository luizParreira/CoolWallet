import {createSelector} from 'reselect';

const price = state => state.price;
export const usdPrice = createSelector(price, price => price && price.price_usd);
export const loading = createSelector(state => state, state => state.loading);
