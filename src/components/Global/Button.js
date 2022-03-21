import React from 'react';
import '@assets/styles/button.scss';
import PropTypes from 'prop-types';

const Button = ({ buttonClass, onClickHandleFunction }) => {
    return (
        <button
            type="button"
            className={buttonClass}
            onClick={onClickHandleFunction}
        >
            {buttonContent}
        </button>
    );
};

Button.PropTypes = {
    buttonClass: PropTypes.string.isRequired,
    onClickHandleFunction: PropTypes.func.isRequired,
    buttonContent: PropTypes.node,
};

export default Button;
