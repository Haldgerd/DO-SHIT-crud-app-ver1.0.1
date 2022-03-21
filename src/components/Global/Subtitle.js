import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ subtitleClass }) => {
    return <h4 className={subtitleClass}>Subtitle</h4>;
};

Subtitle.propTypes = {
    subtitleClass: PropTypes.string.isRequired,
};

export default Subtitle;
