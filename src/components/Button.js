import React from 'react';
import '../assets/styles/button.scss';
import PropTypes from 'prop-types';

const Button = ({ buttonClass }) => {
    return (
        <button type="button" className={buttonClass}>
            CLICK ME
        </button>
    );
};

Button.propTypes = {
    buttonClass: PropTypes.string.isRequired,
};

export default Button;
