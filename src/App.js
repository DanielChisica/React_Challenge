import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from "./Redux/containers/appContainer";
import store from "./Redux/stores/mainStore";

class App extends React.Component {
    render() {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    );
  }
};

export default App;
