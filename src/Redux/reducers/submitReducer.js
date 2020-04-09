import * as types from '../constants/actiontypes';
const defaultState = ()=> {return getState=>{getState()}};

const submitReducer = (state,action) => {
     switch (action.type) {
         case types.REGISTER:
             console.log(types.REGISTER)
             return {
                 email:action.email,
                 registered:action.registered
             };

         case types.REGISTERING:
             console.log(types.REGISTERING)
             return {
                 registering:action.registering
             };

         default:
             return defaultState()
     }
};

export default submitReducer;
