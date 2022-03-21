import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ paragraphClass, text }) => {
    return <p className={paragraphClass}>{text}</p>;
};

Paragraph.propTypes = {
    paragraphClass: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default Paragraph;
