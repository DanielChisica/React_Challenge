import React from 'react';
import PropTypes from 'prop-types';

const Country = props => {
    return (
        <div className="input-container">
            <label>
                {props.label}
                <select className="select-object" value={props.value} name={props.name} onChange={props.onChange}>
                    <option value="" key={0}>
                        ---
                    </option>
                    {props.options.map(option => (
                        <option value={option.code} key={option.code}>
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
    options:PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    touched: PropTypes.bool.isRequired,
    valid:PropTypes.bool.isRequired
}

export default Country;
