import * as types from '../constants/actiontypes'

export const registerData = userData => {
    return {
        type: types.REGISTER,
        email: userData.email,
        registered: userData.registered
    }
};

export const registeringData = formState => {
    return {
        type: types.REGISTERING,
        registering: formState.registering
    }
}
