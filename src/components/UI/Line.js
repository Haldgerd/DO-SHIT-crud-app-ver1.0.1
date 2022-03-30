import React from 'react';
import PropTypes from 'prop-types';

const Line = ({ lineClass, children }) => {
    return <div className={lineClass}>{children}</div>;
};

Line.propTypes = {
    lineClass: PropTypes.string.isRequired,
    children: PropTypes.node,
};

Line.defaultProps = {
    children: <p />,
};

export default Line;
