import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ iconClass, icon }) => {
    return <i className={iconClass}>{icon}</i>;
};

Icon.propTypes = {
    iconClass: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default Icon;
