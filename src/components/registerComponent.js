import React from 'react';
import {Form} from 'react-bootstrap';
import '../styles/index.css'
import changeHandler from "../classes/changeHandler";
import Countries from "../assets/json/countries"
import Country from "./formComponents/Country";
import Email from "./formComponents/Email";
import Name from "./formComponents/Name";
import Password from "./formComponents/Password";
import Phone from "./formComponents/Phone";
import Picture from "./formComponents/Picture";

/**
 * Class which represents register React component
 */
class register extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            formControls: {

                name: {
                    value: '',
                    valid: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true
                    },
                    touched: false
                },

                lastName: {
                    value: '',
                    valid: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true
                    },
                    touched: false
                },

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
                        minLength: 8,
                        isRequired: true,
                        isPassword: true
                    },
                    touched: false
                },

                phone: {
                    value: '',
                    valid: false,
                    validationRules: {
                        isRequired: false,
                        isPhone: true
                    },
                    touched: false
                },

                country:{
                    value: '',
                    valid: false,
                    touched: false,
                }
            },
            formMessage:
                (this.props.registered!==undefined) ? this.props.registered?"info":"info-hidden" : "info-hidden"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event){
        changeHandler(event,this);
    }

    /**
     * Manages the submit event of the form
     * @param event
     */
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.formControls.name.valid && this.state.formControls.lastName.valid && this.state.formControls.email.valid
            && this.state.formControls.password.valid){
            console.log(this.state);
            console.log(event.target.country.value);
            console.log(event.target.picture.files[0]);
            console.log(event.target.birthday.value);
            this.props.submitUserData(
                {
                    email:this.state.formControls.email.value,
                    registered:true
                }
            )
        } else{
            console.log('Uncompleted data')
        }
    }

    render() {
        console.log(this.props)
        console.log(this.state);
        return(<div className="registerForm-container">
            <form onSubmit={this.handleSubmit}>
                <Name name="name" label="Name:" value={this.state.formControls.name.value} onChange={this.handleChange}
                      touched={this.state.formControls.name.touched} valid={this.state.formControls.name.valid}/>

                <Name name="lastName" label="Last name:" value={this.state.formControls.lastName.value} onChange={this.handleChange}
                      touched={this.state.formControls.lastName.touched} valid={this.state.formControls.lastName.valid}/>

                <Email name="email" label="Account e-mail:" value={this.state.formControls.email.value} onChange={this.handleChange}
                       touched={this.state.formControls.email.touched} valid={this.state.formControls.email.valid}/>

                <Password name="password" label="Introduce a password:" value={this.state.formControls.password.value}
                          warningMessage="Requires: at least 8 digits, 1 uppercase, 1 number and 1 special character"
                          onChange={this.handleChange} touched={this.state.formControls.password.touched}
                          valid={this.state.formControls.password.valid}/>

                <Picture name="picture" label="Select a profile picture"/>

                <Phone name="phone" label="Enter a phone number: " value={this.state.formControls.phone.value} onChange={this.handleChange}
                       touched={this.state.formControls.phone.touched} valid={this.state.formControls.phone.valid}/>

                <label>
                    Date of birth:
                    <Form.Control type="date" name="birthday" placeholder="dd-mm-yyyy"/>
                </label>

                <Country name="country" label="Nationality:" value={this.state.formControls.country.value} onChange={this.handleChange}
                         touched={this.state.formControls.country.touched} valid={this.state.formControls.country.valid}
                         options={Countries}/>

                <input type="submit" value="Register" id="register-button"/>
        </form>
            <p className={this.state.formMessage}>Your information has been submitted</p>
        </div>)
    }
}
export default register;
