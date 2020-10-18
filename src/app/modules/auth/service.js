import request from '../../../vendor/utils/fetch';

/**
 * API login with email and password
 * @param email
 * @param password
 * @returns {Promise<unknown>}
 */
export const loginWithEmail = ({ email, password }) => {
    console.log("[]: ", { email, password })
    return { token: 123456, user: [] }
}
