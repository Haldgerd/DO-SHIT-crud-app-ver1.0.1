import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ imageClass, source, alternative }) => {
    return <img className={imageClass} src={source} alt={alternative} />;
};

Image.propTypes = {
    imageClass: PropTypes.string,
    source: PropTypes.string.isRequired,
    alternative: PropTypes.string.isRequired,
};

export default Image;
