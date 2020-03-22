import {connect} from 'react-redux'
import register from "../../components/registerComponent";
import {registerData} from "../actions/registerData"

const mapDispatchToProps = (dispatch) => {
    return {
        submitUserData: (userData) => {
            dispatch(registerData(userData))
        }
    }
};

const registerContainer = connect(null, mapDispatchToProps)(register);

export default registerContainer ;

