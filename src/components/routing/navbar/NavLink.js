import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

// ------------- COMPONENT IMPORTS -------------
import Button from '../../UI/Button';
import Wrapper from '../../wrappers/Wrapper';
import Paragraph from '../../UI/Paragraph';
import styles from './navLink.module.css';

const NavLink = ({ path, context, icon }) => {
    return (
        <li className={styles.nav__link}>
            {/* add NavButtons component separately */}
            <Button
                buttonClass={styles.nav__button}
                onClickHandleFunction={path}
            >
                <Icon icon={icon} className={styles.nav__icon} />
            </Button>
            <Wrapper wrapperClass={styles.nav__context}>
                <Paragraph paragraphClass={styles.nav__text} text={context} />
            </Wrapper>
        </li>
    );
};

NavLink.propTypes = {
    path: PropTypes.func.isRequired,
    context: PropTypes.string,
    icon: PropTypes.string.isRequired,
};

NavLink.defaultProps = {
    context: '',
};

export default NavLink;
