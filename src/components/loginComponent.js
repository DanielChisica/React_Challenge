import React from 'react';
import './styles/index.css';
import changeHandler from "../classes/changeHandler";
import Email from "./formComponents/Email";
import Password from "./formComponents/Password";
class login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formControls: {
                email: {
                    value: '',
                    valid: false,
                    validationRules: {
                        isRequired: true,
                        isEmail: true
                    },
                    touched: false
                },

                password: {
                    value: '',
                    valid: false,
                    validationRules: {
                        isRequired: true
                    },
                    touched: false
                }
            }
        }
        this.loginClick=this.loginClick.bind(this)
    }

    loginClick(event){
        event.preventDefault();
        if (this.state.formControls.email.valid && this.state.formControls.password.valid){
            console.log(this.state)
        } else {
            console.log('Uncompleted data')
        }
    }

    render() {
        return(<div className="loginForm-container">
            <Email name="email" label="Account e-mail:" value={this.state.formControls.email.value} onChange={changeHandler}
                   touched={this.state.formControls.email.touched} valid={this.state.formControls.email.valid}/>

            <Password name="password" label="Enter your password:" value={this.state.formControls.password.value}
                      warningMessage="Introduce a password" touched={this.state.formControls.password.touched}
                      valid={this.state.formControls.password.valid}/>

                      <button id="login-button" onClick={this.loginClick}>Log in</button>
        </div>)
    }
}
export default login;
