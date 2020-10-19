// flow
import * as Actions from './constants';

/**
 * Action switch theme
 * @returns {{type: string}}
 */
export function switchMode() {
    return {
        type: Actions.SWITCH_MODE,
    };
}


/**
 * Fetch settings success
 * @param settings
 * @param configSetting
 * @param configs
 * @returns {{type: string, payload: {settings: *, configSetting: *, configs: *}}}
 */
export function fetchSettingSuccess({ settings }) {
    return {
        type: Actions.FETCH_SETTING_SUCCESS,
        payload: {
            settings
        },
    };
}

/**
 * Close Getting Stated
 * @returns {{type: string}}
 */
export function closeGettingStarted() {
    return {
        type: Actions.CLOSE_GETTING_STARTED,
    };
}
