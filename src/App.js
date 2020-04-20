import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from "./Redux/containers/appContainer";
import store from "./Redux/stores/mainStore";

/**
 * This class represents the whole Redux-React application component
 */
class App extends React.Component {
    render() {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    );
  }
}

export default App;
