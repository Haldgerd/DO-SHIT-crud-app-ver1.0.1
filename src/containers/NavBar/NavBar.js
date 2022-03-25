import React from 'react';

// ------------------ COMPONENTS IMPORT --------------
import NavWraper from '../../components/wrappers/NavWrapper';
import NavLinks from '../../components/routing/navbar/NavLinks';
import styles from './navBar.module.css';

const NavBar = () => {
    return (
        <NavWraper navClass={styles.landing__nav}>
            <NavLinks />
        </NavWraper>
    );
};

export default NavBar;
