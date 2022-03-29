import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ squareClass }) => {
    return <div className={squareClass} />;
};

Square.propTypes = {
    squareClass: PropTypes.string.isRequired,
};

export default Square;
