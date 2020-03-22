import React from 'react';
import { Provider} from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/navbarComponent";
import {loginLink, registerLink} from "./routes/navbarRoutes";

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div className="container">
                    <Navbar />
                    <br/>
                    {loginLink}
                    {registerLink}
                </div>
            </Router>
        </Provider>
    );
  }
};

export default App;
