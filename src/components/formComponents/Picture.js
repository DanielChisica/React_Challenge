import React from 'react';
import PropTypes from 'prop-types';

class Picture extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            counter:0
        }
    }

    cleanFiles(){
        this.setState(state=>(
            {
                counter:state.counter+1
            }
        ));
    }

        render() {
                return (
                    <div className="input-container input-file">
                        <label>
                            <div className="label">{this.props.label}</div>
                            <input name={this.props.name} type="file" key={this.state.counter} className="input-image" accept="image/png, image/jpeg"/>
                        </label>
                    </div>
                );
        };
}

Picture.propTypes={
    name:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired
};

export default Picture;
