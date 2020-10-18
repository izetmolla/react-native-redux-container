import { fromJS } from 'immutable';

import { REHYDRATE } from 'redux-persist/lib/constants';
import * as Actions from './constants';
import { errorInit as initError } from './config';

const initState = fromJS({
    isLogin: false,
    pending: false,
    user: {},
    token: '',
    loginError: initError,
});

export default function authReducer(state = initState, action = {}) {
    switch (action.type) {
        case Actions.SIGN_IN_WITH_EMAIL:
            return state.set('pending', true).set('loginError', fromJS(initError));
        case Actions.SIGN_IN_WITH_EMAIL_SUCCESS:
            return state
                .set('pending', false)
                .set('user', fromJS(action.payload.user))
                .set('isLogin', true)
                .set('token', fromJS(action.payload.token))
        case Actions.SIGN_IN_WITH_EMAIL_ERROR:
            const errorSignIn = action.payload;
            return state.set('pending', false).set('loginError', fromJS(errorSignIn));


        case Actions.SIGN_OUT_SUCCESS:
            return initState;

        case REHYDRATE:
            if (action.payload && action.payload.auth) {
                // Restore only user and isLogin state
                const { auth } = action.payload;
                return initState.merge(
                    fromJS({
                        user: auth.get('user'),
                        token: auth.get('token'),
                        isLogin: auth.get('isLogin')
                    }),
                );
            } else {
                return state;
            }
        default:
            return state;
    }
}
