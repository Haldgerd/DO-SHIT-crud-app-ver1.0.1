import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ headerClass, children }) => {
    return <header className={headerClass}>{children}</header>;
};

Header.propTypes = {
    headerClass: PropTypes.string.isRequired,
    children: PropTypes.node,
};

Header.defaultProps = {
    children: '<></>',
};
export default Header;
