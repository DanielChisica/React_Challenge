import React from 'react';
import { Provider} from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
        </Provider>
    );
  }
};

export default App;
