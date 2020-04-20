import {connect} from 'react-redux'
import appComponent from "../../components/appComponent"

/**
 * Maps the state of the application and passes it as props to the appComponent
 * @param state Application state
 * @returns {{registering: boolean}} Registering property
 */
const mapStateToProps = (state) => {
    return {registering: state.submitReducer.registering}
};

const AppContainer=connect(mapStateToProps,null)(appComponent)

export default AppContainer;
