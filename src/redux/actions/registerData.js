import * as types from '../constants/actiontypes'

export const registerData = (userData) => {
    return {
        type: types.REGISTER,
        email: userData.email,
        logged: userData.logged
    }
};
