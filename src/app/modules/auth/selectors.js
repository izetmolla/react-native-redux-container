import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

export const auth = (state) => state.auth;
export const authSelector = createSelector(auth, (data) => data.toJS());

export const isLoginSelector = createSelector(auth, (data) =>
    data.get('isLogin'),
);

/**
 * Get user id
 */
export const userIdSelector = createSelector(auth, (data) =>
    data.getIn(['user', 'ID']),
);



/**
 * Token selector
 * @type {OutputSelector<unknown, *, (res: *) => *>}
 */
export const tokenSelector = createSelector(auth, (data) => data.get('token'));
