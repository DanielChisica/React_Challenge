import React from 'react';
import PropTypes from 'prop-types';

const Email = props => {

    let inputElement = "input-element";
    let warningControl = "warning";

    if (props.touched && !props.valid) {
        inputElement = 'input-element input-error';
        warningControl = "show-warning"
    }

    return (
        <div className="input-container">
            <label>
                <div className="label">{props.label}</div>
                <input type="email" name={props.name} className={inputElement} value={props.value} size="30"
                       onChange={props.onChange}/>
            </label>
            <div className="error-container"><p className={warningControl}>*Invalid e-mail, please verify it</p></div>
        </div>
    );
};

Email.propTypes={
    name: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    touched: PropTypes.bool.isRequired,
    valid:PropTypes.bool.isRequired
};

export default Email;
