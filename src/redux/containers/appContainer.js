import {connect} from 'react-redux'
import appComponent from "../../components/appComponent"

const mapStateToProps = (state) => {
    return {registering:state.registering}
};

const AppContainer=connect(mapStateToProps,null)(appComponent)

export default AppContainer;
