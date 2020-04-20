import {connect} from 'react-redux';
import login from "../../components/loginComponent";

/**
 * Maps the state of the application and passes it as props to the login Component
 * @param state Application status
 * @returns {{registered: (boolean|{}), email: *}} Application properties that login component will use
 */
const mapStateToProps = (state) => {
    return {email: state.submitReducer.email, registered : state.submitReducer.registered}
};

const loginContainer = connect(mapStateToProps, null)(login);

export default loginContainer;
