import React from 'react';

// --------------- COMPONENTS IMPORTANT ---------------
import Title from '../../components/UI/Title';
import Subtitle from '../../components/UI/Subtitle';
import Header from '../../components/wrappers/Header';
import styles from './mainTitle.module.css';

const MainTitle = () => {
    return (
        <Header headerClass={styles.main__card}>
            <Title titleClass={styles.main__title} title="do shit!" />
            <Subtitle
                subtitleClass={styles.main__subtitle}
                subtitle="just do shit"
            />
        </Header>
    );
};

export default MainTitle;
