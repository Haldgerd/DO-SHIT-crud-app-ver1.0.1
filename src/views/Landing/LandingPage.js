import React from 'react';

// ------------------- COMPONENTS IMPORT -----------------
import MainTitle from '../../containers/MainTitle/MainTitle';
import Lines from '../../containers/Lines/Lines';
import Line from '../../components/UI/Line';
import NavBar from '../../containers/NavBar/NavBar';
import LoginBar from '../../components/routing/loginBar/LoginBar';
import styles from './landingPage.module.css';

const LandingPage = () => {
    return (
        <section className={styles.landing__page}>
            <Line lineClass={styles['landing__line-orange']}>
                <LoginBar />
            </Line>
            <Lines />
            <MainTitle />
            <NavBar />
        </section>
    );
};

export default LandingPage;
