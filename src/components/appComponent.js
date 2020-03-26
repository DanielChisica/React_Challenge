import React, {useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/navbarComponent";
import {loginLink, registerLink} from "./routes/navbarRoutes";
import Modal from "react-modal";
import './styles/index.css'

Modal.setAppElement("#root");

class AppComponent extends React.Component {
    render() {
        return (
            <div className="appContainer">
                <Modal isOpen={this.props.registering.submitReducer} style={{content: {width: '30%'}}}>
                    <p>Submitting your information</p>
                </Modal>
                <Router>
                    <Navbar/>
                    <br/>
                    {registerLink}
                    {loginLink}
                </Router>
            </div>
        )
    };
}

export default AppComponent;
