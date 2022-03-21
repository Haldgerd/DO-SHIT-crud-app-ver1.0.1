import React from 'react';
import PropTypes from 'prop-types';
import '@assets/styles/main.scss';

const Title = ({ titleClass, title }) => {
    return <h1 className={titleClass}>{title}</h1>;
};

Title.PropTypes = {
    title: PropTypes.string.isRequired,
    titleClass: PropTypes.string.isRequired,
};

export default Title;
