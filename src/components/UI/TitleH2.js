import React from 'react';
import PropTypes from 'prop-types';

const TitleH2 = ({ titleH2Class, H2Title }) => {
    return <h2 className={titleH2Class}>{H2Title}</h2>;
};

TitleH2.propTypes = {
    titleH2Class: PropTypes.string.isRequired,
    H2Title: PropTypes.string.isRequired,
};

export default TitleH2;
