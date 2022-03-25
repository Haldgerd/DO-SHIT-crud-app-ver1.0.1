import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ wrapperClass, children }) => {
    return <div className={wrapperClass}>{children}</div>;
};

Wrapper.propTypes = {
    wrapperClass: PropTypes.string.isRequired,
    children: PropTypes.node,
};

Wrapper.defaultProps = {
    children: PropTypes.node,
};

export default Wrapper;
