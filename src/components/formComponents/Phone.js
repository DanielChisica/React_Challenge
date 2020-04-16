import React from 'react';
import PropTypes from 'prop-types';

const Phone = props => {

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
                <input type="tel" placeholder="123-45-67" pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}" name={props.name}
                       className={inputElement} value={props.value} onChange={props.onChange}/>
            </label>
            <div className="error-container">
                <p className={warningControl}>*Invalid number, please match the requested format, use hyphens</p></div>
        </div>
    );
}

Phone.propTypes={
    name: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    touched: PropTypes.bool.isRequired,
    valid:PropTypes.bool.isRequired
}

export default Phone;
