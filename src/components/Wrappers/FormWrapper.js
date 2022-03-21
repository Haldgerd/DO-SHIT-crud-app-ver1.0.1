import React from 'react';
import PropTypes from 'prop-types';

const FormWrapper = ({ onSubmitHandler, formClass }) => {
    return (
        <form onSubmit={onSubmitHandler} className={formClass}>
            {children}
        </form>
    );
};

FormWrapper.propTypes = {
    onSubmitHandler: PropTypes.func.isRequired,
    formClass: PropTypes.string.isRequired,
};

export default FormWrapper;
