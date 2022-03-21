import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, content, labelClass }) => {
    return (
        <label htmlFor={htmlFor} className={labelClass}>
            {content}
        </label>
    );
};

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    labelClass: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default Label;
