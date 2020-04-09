import validate from "./validation";

/**
 * Manages the change event of an input element
 * @param event
 */
const changeHandler = (event,form) => {
    const name = event.target.name;
    const value = event.target.value;
    const updatedControls = {
        ...form.state.formControls
    };
    const updatedFormElement = {
        ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
        formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    form.setState({
        formControls: updatedControls,
        formIsValid: formIsValid
    });
}

export default changeHandler;
