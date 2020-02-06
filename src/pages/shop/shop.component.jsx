import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fecthCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionOverviewContainer from '../../components/collection-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({ fecthCollectionsStart, match }) => {
  useEffect(() => {
    fecthCollectionsStart()
    }, [fecthCollectionsStart]);
    
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
    )    
}

const mapDispatchToPros = dispatch => ({
  fecthCollectionsStart: () => dispatch(fecthCollectionsStart())
});

export default connect(null, mapDispatchToPros)(ShopPage);