import React from 'react';
import PropTypes from 'prop-types';

const Line = ({ lineClass }) => {
    return <div className={lineClass} />;
};

Line.propTypes = {
    lineClass: PropTypes.string.isRequired,
};

export default Line;
