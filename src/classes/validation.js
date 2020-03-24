/**
 * Validates the value of an input element based on the given rules
 * @param value Input element value
 * @param rules Object which contains validation rules
 * @returns {boolean} isValid
 */
const validate = (value, rules) => {
    let isValid = true;

    for (let rule in rules) {

        switch (rule) {
            case 'minLength': isValid = isValid && minLengthValidator(value, rules[rule]); break;

            case 'isRequired': isValid = isValid && requiredValidator(value); break;

            case 'isEmail': isValid = isValid && emailValidator(value); break;

            case 'isPassword': isValid = isValid && passwordValidator(value); break;

            case 'isPhone': isValid = isValid && phoneValidator(value); break;

            default: isValid = true;
        }

    }

    return isValid;
}


/**
 * Validates a string depending if it accomplish the minimum length
 * @param  value String to be evaluated
 * @param  minLength Length that string must accomplish
 * @return {boolean} isValid
 */
const minLengthValidator = (value, minLength) => {
    return value.length >= minLength;
}

/**
 * Check to confirm that field is required
 *
 * @param  value String value to be evaluated
 * @return {boolean} isValid
 */
const requiredValidator = value => {
    return value.trim() !== '';
}

/**
 * Email validation
 *
 * @param value Email string to be tested in a Regular Expression
 * @return {boolean} isValid
 */
const emailValidator = value => {
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(String(value).toLowerCase());
}

/**
 * Password validation
 * @param value Password string to be tested in a Regular Expression
 * @returns {boolean} isValid
 */
const passwordValidator = value => {
    return (/\d/).test(String(value)) && String(value).match(/[A-Z]/) && String(value).match(/[^a-z0-9]/i)
}

/**
 * Phone format validation
 * @param value Phone string to be tested in a Regular Expression
 * @returns {boolean} isValid
 */
const phoneValidator= value =>{
    return String(value).match(/[0-9]{3}-[0-9]{2}-[0-9]{2}/) === String(value)
}

export default validate;
