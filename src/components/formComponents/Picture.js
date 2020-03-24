import React from 'react';
import PropTypes from 'prop-types';

const Picture = props => {
    return (
        <div className="input-container">
            <label>
                {props.label}
                <input name={props.name} type="file" className="input-file" accept="image/png, image/jpeg" />
            </label>
        </div>
    );
}

Picture.propTypes={
    name:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired}

export default Picture;
