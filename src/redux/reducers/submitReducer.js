import * as types from '../constants/actiontypes'

const submitReducer = (state = {}, action) => {
    switch (action.type) {
        case types.REGISTER:
            return {
                email:action.email,
                logged:true
            };
        default:
            return state;
    }
};

export default submitReducer;
