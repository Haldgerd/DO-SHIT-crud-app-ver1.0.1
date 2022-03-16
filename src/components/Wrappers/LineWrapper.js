import React from 'react';
import PropTypes from 'prop-types';

const LineWrapper = ({ children, wrapperClass }) => {
    return <div className={wrapperClass}>{children}</div>;
};

LineWrapper.PropTypes = {
    children: PropTypes.node.isRequired,
    wrapperClass: PropTypes.string.isRequired,
};

export default LineWrapper;
