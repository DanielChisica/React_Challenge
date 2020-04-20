import * as types from '../constants/actiontypes'

/**
 * Action creator for user information
 * @param userData Object with user data
 * @returns {{registered: (boolean|{}), type: string, email: *}}
 */
export const registerData = userData => {
    return {
        type: types.REGISTER,
        email: userData.email,
        registered: userData.registered
    }
};

/**
 * Action creator for the registering process
 * @param formState Information about form status
 * @returns {{registering: boolean, type: string}}
 */
export const registeringData = formState => {
    return {
        type: types.REGISTERING,
        registering: formState.registering
    }
};
