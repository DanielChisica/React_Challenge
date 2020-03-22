import React from 'react';

const Phone = props => {

    let inputElement = "input-element";
    let warningControl = "warning";

    if (props.touched && !props.valid) {
        inputElement = 'input-element input-error';
        warningControl = "show-warning"
    }

    return (
        <div className="input-container">
            <input type="tel" className={inputElement} {...props} />
            <p className={warningControl}></p>
        </div>
    );
}

export default Phone;
