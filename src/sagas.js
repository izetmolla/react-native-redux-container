import { all } from 'redux-saga/effects';

import authSaga from './app/modules/auth/saga';
import commonSaga from './app/modules/common/saga'

/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSagas() {
    yield all([
        commonSaga(),
        authSaga(),
    ]);
}
