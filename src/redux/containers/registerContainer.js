import {connect} from 'react-redux'
import register from "../../components/registerComponent";
import {registerData,registeringData} from "../actions/registerAction"

const mapDispatchToProps = (dispatch) => {
    return {
        submitUserData: (userData) => {
            dispatch(registeringData({registering:true}))

            setTimeout(()=>{
                dispatch(registeringData({registering:false}))
                dispatch(registerData(userData))
            },3000);
        }
    }
};

const mapStateToProps = (state) => {
    return {registered:state.registered}
};

const registerContainer = connect(mapStateToProps, mapDispatchToProps)(register);

export default registerContainer ;

