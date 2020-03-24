import React from 'react';
import PropTypes from 'prop-types';

const Country = props => {

    return (
        <div className="input-container">
            <label>
                {props.label}
                <select className="select-object" value={props.value} name={props.name}>
                    {props.options.map(option => (
                        <option value={option.code}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}

Country.propTypes={
    name: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    options:PropTypes.array.isRequired
}

export default Country;
