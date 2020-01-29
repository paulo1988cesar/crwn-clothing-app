import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fecthCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollectionOverviewContainer from '../../components/collection-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends Component {
  
  componentDidMount() {
    const { fecthCollectionsStartAsync } = this.props;
    fecthCollectionsStartAsync();
  }

  render()
  {

    const { match } = this.props;
    
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
    )    
  }
}

const mapDispatchToPros = dispatch => ({
  fecthCollectionsStartAsync: () => dispatch(fecthCollectionsStartAsync())
});

export default connect(null, mapDispatchToPros)(ShopPage);