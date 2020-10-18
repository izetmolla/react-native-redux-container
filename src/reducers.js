import { combineReducers } from 'redux';

import authReducer from './app/modules/auth/reducer';
import commonReducer from './app/modules/common/reducer';

/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
    common: commonReducer,
    auth: authReducer,
});

export default rootReducers;
