import { connect } from 'react-redux';
import {  createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner  from '../with-spinner/with-spinner.components';
import CollectionOverview  from './collection-overview.component';

const matStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
    connect(matStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;