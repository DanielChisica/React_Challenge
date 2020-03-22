import React from 'react';

const Country = props => {

    let inputElement = "input-element";

    if (props.touched && !props.valid) {
        inputElement = 'input-element input-error';
    }

    return (
        <div className="input-container">
            <select className={inputElement} value={props.value} onChange={props.onChange} name={props.name}>
                {props.options.map(option => (
                    <option value={option.code}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Country;
