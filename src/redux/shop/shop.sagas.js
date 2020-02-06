import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, converCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fecthCollectionsSuccess, fecthCollectionsFailure } from './shop.actions';
import ShopActionTypes  from './shop.types';

export function* fetchCollectionsAsync() {
    
    try
    {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(converCollectionsSnapshotToMap, snapshot);
        yield put(fecthCollectionsSuccess(collectionsMap));
    }
    catch (error)
    {
        yield put(fecthCollectionsFailure(error.message));
    }

}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}