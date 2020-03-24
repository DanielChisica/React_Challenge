import React from 'react';
import PropTypes from 'prop-types';

const Name = props => {

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
                <input type="text" name={props.name} className={inputElement} value={props.value} onChange={props.onChange}/>
            </label>
            <p className={warningControl}>Must have 3 characters at least</p>
        </div>
    );
}

Name.propTypes={
    name: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    touched: PropTypes.bool.isRequired,
    valid:PropTypes.bool.isRequired
}

export default Name;
