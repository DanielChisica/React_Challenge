import * as types from '../constants/actiontypes';
const defaultState = ()=> {return getState=>{getState()}};

/**
 * Redux reducer that handles submit actions
 * @param state Application status
 * @param action Dispatched action
 * @returns {{registered: (boolean|{}), email: *}|(function(...[*]=))|{registering: boolean}} Application state
 */
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
