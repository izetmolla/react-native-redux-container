import AsyncStorage from '@react-native-community/async-storage';
import { put, call, select, takeEvery } from 'redux-saga/effects';


import * as Actions from './constants';

import {
    loginWithEmail
} from './service';




import NavigationService from '../../../vendor/utils/navigation';

/**
 * Do login success
 * @param token
 * @param user
 * @returns {IterableIterator<*>}
 */
function* doLoginSuccess(token, user = {}, method = 'email') {
    yield put({
        type: Actions.SIGN_IN_WITH_EMAIL_SUCCESS,
        payload: { token, user },
    });
    yield call(NavigationService.navigate, "Account");
    yield call(AsyncStorage.setItem, 'token', token);
    yield call(AsyncStorage.setItem, 'method', method);
}

/**
 * Sign In saga
 * @param username
 * @param password
 * @returns {IterableIterator<*>}
 */
function* signInWithEmailSaga({ email, password }) {
    try {
        const { token, user } = yield call(loginWithEmail, {
            email,
            password,
        });
        yield call(doLoginSuccess, token, user, 'email');
    } catch (e) {
        // yield call(handleError, e)
        yield put({
            type: Actions.SIGN_IN_WITH_EMAIL_ERROR,
            payload: {
                message: e.message,
            },
        });
    }
}



export default function* authSaga() {
    yield takeEvery(Actions.SIGN_IN_WITH_EMAIL, signInWithEmailSaga);

}
