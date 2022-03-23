import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ subtitleClass, subtitle }) => {
    return <h4 className={subtitleClass}>{subtitle}</h4>;
};

Subtitle.propTypes = {
    subtitleClass: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default Subtitle;
