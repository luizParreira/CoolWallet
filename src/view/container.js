import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {usdPrice, loading} from '../state/price/selectors';
import {priceRequest} from '../state/price/actions';

export default connect(
  createStructuredSelector({loading, usdPrice}),
  {priceRequest}
);
