import React from 'react';
import { Route } from 'react-router-dom' ;
import registerContainer from "../Redux/containers/registerContainer";
import loginContainer from "../Redux/containers/loginContainer";

export const registerLink=<Route key="register" path="/register" component={registerContainer}/>;
export const loginLink=<Route key="login" path="/login" component={loginContainer}/>;
