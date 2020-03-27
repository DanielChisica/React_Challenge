import * as types from '../constants/actiontypes'

const registerData = userData => {
    return {
        type: types.REGISTER,
        email: userData.email,
        registered: userData.registered
    }
};

const registeringData = formState => {
    return {
        type: types.REGISTERING,
        registering: formState.registering
    }
};

export const submitData = userData=>{
    return dispatch=>{
        dispatch(registeringData({registering:true}))

        setTimeout(()=>{
            dispatch(registeringData({registering:false}))
            dispatch(registerData(userData))
        },3000);
    }
}
