import React from 'react';
import PropTypes from 'prop-types';

const NavWrapper = ({ children, navClass }) => {
    return <nav className={navClass}>{children}</nav>;
};

NavWrapper.propTypes = {
    children: PropTypes.node,
    navClass: PropTypes.string.isRequired,
};

NavWrapper.defaultProps = {
    children: '<></>',
};

export default NavWrapper;
