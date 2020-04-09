import {connect} from 'react-redux'
import register from "../../components/registerComponent";
import {registerData, registeringData} from "../actions/registerAction";

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

const mapStateToProps = (state) => {
    return {registered:state.submitReducer.registered}
};

const registerContainer = connect(mapStateToProps, mapDispatchToProps)(register);

export default registerContainer ;

