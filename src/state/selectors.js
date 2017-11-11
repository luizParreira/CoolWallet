import {createSelector} from 'reselect';
import * as priceSelectors from './price/selectors';

export const usdPrice = createSelector(state => state.price, priceSelectors.usdPrice);
export const loading = createSelector(state => state.price, priceSelectors.loading);

