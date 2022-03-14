import React from 'react';
import '../assets/styles/button.scss';

const Button = ({ buttonClass }) => {
    return (
        <>
            <button type="button" className={buttonClass}>
                CLICK ME
            </button>
        </>
    );
};

export default Button;
