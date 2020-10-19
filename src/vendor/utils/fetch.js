import { isImmutable } from 'immutable';

import globalConfig from './global';
import configApi from '../../config/api';

/**
 * Get method
 * @param url
 * @returns {Promise<R>}
 */
const get = (url, options = {}) => {
    return new Promise((resolve, reject) => {
        let baseURL = configApi.API_ENDPOINT + '/wp-json' + url;

        const isWC = url.indexOf('/wc') === 0;
        const isQuery = url.indexOf('?') >= 0;
        const isAuth =
            url.indexOf('/rnlab-app-control') === 0 || url.indexOf('/dokan') === 0;

        if (isWC) {
            baseURL = `${baseURL}${isQuery ? '&' : '?'}consumer_key=${configApi.CONSUMER_KEY
                }&consumer_secret=${configApi.CONSUMER_SECRET}`;
        }

        fetch(baseURL, {
            ...options,
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization:
                    isAuth && globalConfig.getToken()
                        ? `Bearer ${globalConfig.getToken()}`
                        : undefined,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.code) {
                    reject(new Error(data.message));
                } else {
                    resolve(data);
                }
            })
            .catch((error) => {
                return error;
            });
    });
};

/**
 * Post method
 * @param url
 * @param data
 * @param method
 * @returns {Promise<R>}
 */
const post = (url, data, isAuth = false) => {
    return new Promise((resolve, reject) => {
        // To JS Object
        if (isImmutable(data)) {
            data = data.toJS();
        }



        let baseURL = 'https://android.vines.izetmolla.com/v1' + url;

        let headers = {
            Accept: 'application/json', 'Content-Type': 'application/json',
            Authorization: isAuth && globalConfig.getToken() ? `Bearer ${globalConfig.getToken()}` : null
        }


        fetch(baseURL, {
            method: "POST",
            headers,
            body: typeof data === 'object' ? JSON.stringify(data) : null,
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                resolve(result);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export default {
    get,
    post,
    put: (url, data) => post(url, data, 'PUT'),
};
