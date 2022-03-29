import React from 'react';
import { Icon } from '@iconify/react';

// --------------- COMPONENTS IMPORT ---------------
import Button from '../../UI/Button';
import styles from './loginBar.module.css';

const LOGIN__BUTTONS = [
    {
        id: 'login1',
        content: <Icon icon="ci:settings" className={styles.settings__icon} />,
        onClickHandler: () => {
            console.log('settings');
        },
    },
    {
        id: 'login2',
        content: <p className={styles.login__text}>log in</p>,
        onClickHandler: () => {
            console.log('login');
        },
    },
    {
        id: 'login3',
        content: <p className={styles.signup__text}>sign up</p>,
        onClickHandler: () => {
            console.log('sign up');
        },
    },
];

const renderLogin = LOGIN__BUTTONS.map((btn) => {
    return (
        <Button
            buttonClass={styles.login__btn}
            onClickHandleFunction={btn.onClickHandler}
        >
            {btn.content}
        </Button>
    );
});

const LoginBar = () => {
    return <section className={styles.login__bar}>{renderLogin}</section>;
};

export default LoginBar;
