import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonClass, onClickHandleFunction, children }) => {
    return (
        <button
            type="button"
            className={buttonClass}
            onClick={onClickHandleFunction}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    buttonClass: PropTypes.string.isRequired,
    onClickHandleFunction: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Button;
