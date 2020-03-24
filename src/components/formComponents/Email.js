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
                {props.label}
                <input type="email" name={props.name} className={inputElement} value={props.value} onChange={props.onChange}/>
            </label>
            <p className={warningControl}>Invalid e-mail, please verify it</p>
        </div>
    );
}

Email.propTypes={
    name: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    touched: PropTypes.bool.isRequired,
    valid:PropTypes.bool.isRequired
}

export default Email;
