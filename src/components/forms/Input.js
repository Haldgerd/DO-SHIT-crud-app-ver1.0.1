import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputType, inputClass, id, placeholder, defaultValue }) => {
    return (
        <input
            type={inputType}
            id={id}
            placeholder={placeholder}
            className={inputClass}
            value={defaultValue}
        />
    );
};

Input.propTypes = {
    inputType: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: [PropTypes.string, PropTypes.number],
    inputClass: PropTypes.string.isRequired,
    defaultValue: [PropTypes.string, PropTypes.number],
};

Input.defaultProps = {
    placeholder: 'placeholder',
    defaultValue: 'value',
};

export default Input;
