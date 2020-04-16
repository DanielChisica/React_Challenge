import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./navbarComponent";
import {loginLink, registerLink, homeLink} from "../routes/navbarRoutes";
import Modal from "react-modal";
import '../styles/index.css'

Modal.setAppElement("#root");

class AppComponent extends React.Component {
    render() {
        return (
            <div className="appContainer">
                <Modal isOpen={this.props.registering!==undefined?this.props.registering:false}
                       style={
                           {content: {width: '25%',height:'12%', display: 'block', margin: 'auto'}}
                       }>
                    <p className="info">Submitting your information</p>
                </Modal>
                <Router>
                    <Navbar/>
                    {homeLink}
                    {registerLink}
                    {loginLink}
                </Router>
            </div>
        )
    };
}

export default AppComponent;
