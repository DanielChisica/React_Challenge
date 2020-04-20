import {connect} from 'react-redux'
import register from "../../components/registerComponent";
import {registerData, registeringData} from "../actions/registerAction";

/**
 * Dispatches actions that will modify application state
 * @param dispatch
 * @returns {{submitUserData: submitUserData}} Property that holds a function which dispatches the actions
 */
const mapDispatchToProps = (dispatch)=>{
    return {
        submitUserData: (userData)=> {
            console.log(userData)
            console.log("dispatching")
            dispatch(registeringData({registering: true}));
            console.log("dispatched")
            setTimeout(() => {
                dispatch(registeringData({registering: false}));
                dispatch(registerData(userData))
            }, 3000);
    }
}
};

/**
 * Maps the state of the application and passes it as props to the register component
 * @param state Application status
 * @returns {{registered: (boolean|{})}} Registered property
 */
const mapStateToProps = (state) => {
    return {registered:state.submitReducer.registered}
};

const registerContainer = connect(mapStateToProps, mapDispatchToProps)(register);

export default registerContainer ;
