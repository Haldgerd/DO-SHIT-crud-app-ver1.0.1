import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ cardClass, children }) => {
    return <section className={cardClass}>{children}</section>;
};

Card.propTypes = {
    cardClass: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Card;
