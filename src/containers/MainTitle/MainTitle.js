import React from 'react';

// --------------- COMPONENTS IMPORTANT ---------------
import Title from '../../components/UI/Title';
import Subtitle from '../../components/UI/Subtitle';
import Card from '../../components/wrappers/Card';
import styles from './mainTitle.module.css';

const MainTitle = () => {
    return (
        <Card cardClass={styles.main__card}>
            <Title titleClass={styles.main__title} title="do shit!" />
            <Subtitle
                subtitleClass={styles.main__subtitle}
                subtitle="the shit application"
            />
        </Card>
    );
};

export default MainTitle;
