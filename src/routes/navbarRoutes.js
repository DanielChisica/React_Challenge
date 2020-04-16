import React from 'react';
import { Route } from 'react-router-dom' ;
import registerContainer from "../Redux/containers/registerContainer";
import loginContainer from "../Redux/containers/loginContainer";
import homeComponent from "../components/homeComponent";

export const homeLink=<Route exact path="/" key="home" component={homeComponent}/>;
export const registerLink=<Route path="/register" key="register" component={registerContainer}/>;
export const loginLink=<Route path="/login" key="login" component={loginContainer}/>;
