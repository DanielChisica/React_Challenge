import React from 'react';
import PropTypes from 'prop-types';

/**
 * This React component class represents a Dropdown List
 */
class List extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            selected:this.props.headerItem,
            hide: true,
            value: ''
        };
        this.changeSelected=this.changeSelected.bind(this);
        this.hide=this.hide.bind(this);
        this.baseState=this.state;
    }

    /**
     * Resets the state of the list and deletes changes made by the user
     */
    resetState(){
        this.setState(this.baseState)
    }

    /**
     * Hides the options listed by the dropdown list
     */
    hide(){
        this.setState({hide:!this.state.hide})
    }

    /**
     * Changes the selected option when a user clicks at it
     * @param selectedItem Name of the selected option
     * @param code Represents the option value
     */
    changeSelected(selectedItem,code){
        this.setState({selected:selectedItem,value:code});
        this.hide()
    }

    render(){
            return (
                <div className="input-container">
                    <label>
                        <div className="label">{this.props.label}</div>
                        <div className="dropdown">
                            <div className="select-selected" onClick={this.hide}>
                                <span className="list-header">{this.state.selected}</span><span className="arrow"></span>
                            </div>
                            <div className={this.state.hide?"select-items select-hide":"select-items"}>
                                {this.props.options.map(option => (
                                    <div key={option.code} onClick={()=>{this.changeSelected(option.name,option.code)}}>
                                        {option.name}</div>
                                ))}
                            </div>
                        </div>
                    </label>
                </div>
            );
        }
}

List.propTypes={
    label:PropTypes.string.isRequired,
    options:PropTypes.array.isRequired,
    headerItem:PropTypes.string.isRequired
};

export default List;
