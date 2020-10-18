import * as Actions from './constants';

/**
 * Action login
 * @param email
 * @param password
 * @returns {{type: string, username: *, password: *}}
 */
export function signInWithEmail({ email, password }) {
    return {
        type: Actions.SIGN_IN_WITH_EMAIL,
        email,
        password,
    };
}


/**
 * validate login
 * @returns {{type: string}}
 */
export function isLogin() {
    return {
        type: Actions.IS_LOGIN,
    };
}


export function checkAuth() {
    return {
        type: Actions.CHECK_AUTH,
    };
}


/**
 * Action sign out
 * @returns {{type: string}}
 */
export function signOut() {
    return {
        type: Actions.SIGN_OUT,
    };
}
