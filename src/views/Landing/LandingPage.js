import React from 'react';

// ------------------- COMPONENTS IMPORT -----------------
import MainTitle from '../../containers/MainTitle/MainTitle';
import Lines from '../../containers/Lines/Lines';
import Line from '../../components/UI/Line';
import NavBar from '../../containers/NavBar/NavBar';
import styles from './landingPage.module.css';

const LandingPage = () => {
    return (
        <main className={styles.landing__page}>
            <Line lineClass={styles['landing__line-orange']} />
            <Lines />
            <MainTitle />
            <NavBar />
        </main>
    );
};

export default LandingPage;
