import React from 'react';
import {Form} from 'react-bootstrap';
import '../styles/index.css'
import changeHandler from "../classes/changeHandler";
import Countries from "../assets/json/countries"
import List from "./formComponents/List";
import Email from "./formComponents/Email";
import Name from "./formComponents/Name";
import Password from "./formComponents/Password";
import Phone from "./formComponents/Phone";
import Picture from "./formComponents/Picture";
import {animateScroll} from 'react-scroll';

/**
 * Class which represents register React component
 */
class register extends React.Component {
    constructor(props) {
        super(props);

        this.state={
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
                }
            },
        };
        this.baseState=this.state;
        this.countryRef=React.createRef();
        this.pictureRef=React.createRef();
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
            let promise= new Promise(resolve => {
                console.log(this.state);
                console.log(event.target.picture.files[0]);
                console.log(this.countryRef.current.state.value);
                console.log(event.target.birthday.value);
                this.props.submitUserData(
                    {
                        email:this.state.formControls.email.value,
                        registered:true
                    }
                );
                this.countryRef.current.resetState();
                event.target.birthday.value="";
                this.setState(this.baseState);
                this.pictureRef.current.cleanFiles();
                setTimeout(()=>{
                    if(this.props.registered){
                        resolve(this.props.registered)
                    } else {
                        console.log('Not registered yet')
                    }
                },3100)
            }).then(()=>{
                    animateScroll.scrollToBottom();
            })
        } else{
            console.log('Uncompleted data')
        }
    }

    render() {
        return(<div className="register-form-container">
            <div className="header">
                <h1>Join Medium.</h1>
            </div>
            <div className="paragraph">
                <p>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</p>
            </div>
            <form onSubmit={this.handleSubmit}>
                <Name name="name" label="Name:" value={this.state.formControls.name.value} onChange={this.handleChange}
                      touched={this.state.formControls.name.touched} valid={this.state.formControls.name.valid}/>

                <Name name="lastName" label="Last name:" value={this.state.formControls.lastName.value} onChange={this.handleChange}
                      touched={this.state.formControls.lastName.touched} valid={this.state.formControls.lastName.valid}/>

                <Email name="email" label="Account e-mail:" value={this.state.formControls.email.value} onChange={this.handleChange}
                       touched={this.state.formControls.email.touched} valid={this.state.formControls.email.valid}/>

                <Password name="password" label="Introduce a password:" value={this.state.formControls.password.value}
                          warningMessage="*Requires: at least 8 digits, 1 uppercase, 1 number and 1 special character"
                          onChange={this.handleChange} touched={this.state.formControls.password.touched}
                          valid={this.state.formControls.password.valid}/>

                <Picture name="picture" label="Select a profile picture" ref={this.pictureRef} id="input-file-1"/>

                <Phone name="phone" label="Enter a phone number: " value={this.state.formControls.phone.value} onChange={this.handleChange}
                       touched={this.state.formControls.phone.touched} valid={this.state.formControls.phone.valid}/>

                <label>
                    <div className="label">Date of birth:</div>
                    <Form.Control type="date" name="birthday" placeholder="dd-mm-yyyy"/>
                </label>

                <List label="Nationality:" headerItem="Select a country:" options={Countries} ref={this.countryRef}/>

                <input type="submit" value="Register" id="register-button" className="form-button"/>
        </form>
            <div className="submit-message">
                <p className={(this.props.registered!==undefined)
                    ? (this.props.registered?"info":"info-hidden") : ("info-hidden")}>
                    <span><img className="check" src={require('../assets/images/icon.png')} alt="check"/></span>
                    Your information has been submitted</p>
            </div>
        </div>)
    }
}
export default register;
