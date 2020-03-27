import {connect} from 'react-redux'
import register from "../../components/registerComponent";
import {submitData} from "../actions/registerAction"

const mapDispatchToProps = ()=>{return {submitUserData:submitData}};

const mapStateToProps = (state) => {
    return {registered:state.registered}
};

const registerContainer = connect(mapStateToProps, mapDispatchToProps)(register);

export default registerContainer ;

