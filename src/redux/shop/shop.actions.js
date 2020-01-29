import ShopActionTypes from './shop.types';
import { firestore, converCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fecthCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fecthCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fecthCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fecthCollectionsStartAsync = () => {
    return dispatch => {
            const collectionRef = firestore.collection('collections');
            dispatch(fecthCollectionsStart());

            collectionRef
                .get()
                .then(snapshot => {
                    const collectionsMap = converCollectionsSnapshotToMap(snapshot);
                    dispatch(fecthCollectionsSuccess(collectionsMap));
                })
                .catch(error => dispatch(fecthCollectionsFailure(error.message)));
    }
}