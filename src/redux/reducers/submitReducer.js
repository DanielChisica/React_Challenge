import * as types from '../constants/actiontypes';
import store from "../stores/mainStore";

const submitReducer = (action) => {
    switch (action.type) {
        case types.REGISTER:
            return {
                email:action.email,
                registered:action.registered
            };

        case types.REGISTERING:
            return {
                registering:action.registering
            }

        default:
            return store.getState;
    }
};

export default submitReducer;
