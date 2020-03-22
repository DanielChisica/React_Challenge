import React from 'react';

const Picture = props => {
    return (
        <div className="input-container">
            <input type="file"
                   className="input-file"
                   accept="image/png, image/jpeg"{...props} />
        </div>
    );
}

export default Picture;
