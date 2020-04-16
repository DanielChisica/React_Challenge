import React from 'react';
import '../styles/index.css'
import changeHandler from "../classes/changeHandler";
import Email from "./formComponents/Email";
import Password from "./formComponents/Password";
class login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formControls: {
                email: {
                    value: (this.props.registered!==undefined)?this.props.email:'',
                    valid: this.props.registered!==undefined?this.props.registered:false,
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
        this.loginClick=this.loginClick.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }

    loginClick(event){
        event.preventDefault();
        if (this.state.formControls.email.valid && this.state.formControls.password.valid){
            console.log(this.state)
        } else {
            console.log('Uncompleted data')
        }
    }

    handleChange(event){
        changeHandler(event,this);
    }

    render() {
        return(<div className="login-form-container">
            <div className={"header"}>
                <h1>Welcome back.</h1>
            </div>
            <div className={"paragraph"}>
                <p>Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.</p>
            </div>
            <Email name="email" label="Account e-mail:" value={this.state.formControls.email.value} onChange={this.handleChange}
                   touched={this.state.formControls.email.touched} valid={this.state.formControls.email.valid}/>

            <Password name="password" label="Enter your password:" value={this.state.formControls.password.value} onChange={this.handleChange}
                      warningMessage="*Introduce a password" touched={this.state.formControls.password.touched}
                      valid={this.state.formControls.password.valid}/>

                      <button id="login-button" onClick={this.loginClick} className="form-button">Log in</button>
        </div>)
    }
}
export default login;
