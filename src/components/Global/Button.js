import React from 'react';
import '@assets/styles/button.scss';
import PropTypes from 'prop-types';

const Button = ({ buttonClass, buttonHandleFunction }) => {
    return (
        <button
            type="button"
            className={buttonClass}
            onClick={buttonHandleFunction}
        >
            {buttonContent}
        </button>
    );
};

Button.PropTypes = {
    buttonClass: PropTypes.string.isRequired,
    buttonHandleFunction: PropTypes.func.isRequired,
    buttonContent: PropTypes.node,
};

export default Button;
