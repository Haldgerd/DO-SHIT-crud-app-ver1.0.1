import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ subtitleClass, subtitle }) => {
    return <h2 className={subtitleClass}>{subtitle}</h2>;
};

Subtitle.propTypes = {
    subtitleClass: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default Subtitle;
