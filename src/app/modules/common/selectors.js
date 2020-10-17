import forEach from 'lodash/forEach';
import { fromJS, Map } from 'immutable';
import { createSelector } from 'reselect';
import * as Actions from './constants';


export const rootCommon = (state) => state.common;

export const loadingSelector = createSelector(rootCommon, (data) =>
    data.get('loading'),
);


