import React from 'react';

const Password = props => {

    let inputElement = "input-element";
    let warningControl = "warning";

    if (props.touched && !props.valid) {
        inputElement = 'input-element input-error';
        warningControl = "show-warning"
    }

    return (
        <div className="input-container">
            <input type="password" className={inputElement} {...props} />
            <p className={warningControl}></p>
        </div>
    );
}

export default Password;