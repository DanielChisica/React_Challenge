import {connect} from 'react-redux';
import login from "../../components/registerComponent";

const mapStateToProps = (state) => {
    return {email: state.email, logged:state.logged}
};

const loginContainer = connect(mapStateToProps, null)(login);

export default loginContainer;
