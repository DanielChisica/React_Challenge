import React from 'react';
import PropTypes from 'prop-types';

const Password = props => {

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
                <input type="password" name={props.name} className={inputElement} value={props.value}
                       onChange={props.onChange}/>
            </label>
            <div className="error-container"><p className={warningControl}>{props.warningMessage}</p></div>
        </div>
    );
}

Password.propTypes={
    name: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange: PropTypes.func,
    touched: PropTypes.bool.isRequired,
    valid:PropTypes.bool.isRequired,
    warningMessage: PropTypes.string.isRequired
}

export default Password;
