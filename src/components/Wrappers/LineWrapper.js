import React from 'react';
import PropTypes from 'prop-types';

const LinesWrapper = ({ children, wrapperClass }) => {
    return <div className={wrapperClass}>{children}</div>;
};

LinesWrapper.PropTypes = {
    children: PropTypes.node.isRequired,
    wrapperClass: PropTypes.string.isRequired,
};

export default LinesWrapper;
