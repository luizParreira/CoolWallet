import {createSelector} from 'reselect';
import * as priceSelectors from './price/selectors';

const price = state => state.price;
export const usdPrice = createSelector(price, priceSelectors.usdPrice);
export const loading = createSelector(price, priceSelectors.loading);
