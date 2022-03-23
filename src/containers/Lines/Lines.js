import React from 'react';

// ------------- COMPONENTS AND STYLES IMPORT ------------------
import LineWrapper from '../../components/wrappers/LineWrapper';
import Line from '../../components/UI/Line';
import styles from './lines.module.css';

const Lines = () => {
    const getLines = () => {
        const lines = [];
        const MAX__LINES = 4;

        for (let minLines = 0; minLines < MAX__LINES; minLines += 1) {
            lines.push(<Line lineClass={`${styles.line}`} />);
        }

        return lines;
    };

    return (
        <LineWrapper wrapperClass={styles.line__wrapper}>
            {getLines()}
        </LineWrapper>
    );
};

export default Lines;
