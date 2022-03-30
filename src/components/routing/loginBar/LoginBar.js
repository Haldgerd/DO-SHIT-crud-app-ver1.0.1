import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

// --------------- COMPONENTS IMPORT ---------------
import Button from '../../UI/Button';
import styles from './loginBar.module.css';

const LoginBar = () => {
    const navigate = useNavigate();

    const LOGIN__BUTTONS = [
        {
            id: 'login1',
            content: (
                <Icon icon="ci:settings" className={styles.settings__icon} />
            ),
            onClickHandler: () => {},
        },
        {
            id: 'login2',
            content: <p className={styles.login__text}>log in</p>,
            onClickHandler: () => {
                navigate('/Login');
            },
        },
        {
            id: 'login3',
            content: <p className={styles.signup__text}>sign up</p>,
            onClickHandler: () => {
                navigate('/SignUp');
            },
        },
    ];

    const renderLogin = LOGIN__BUTTONS.map((btn) => {
        return (
            <Button
                key={btn.id}
                buttonClass={styles.login__btn}
                onClickHandleFunction={btn.onClickHandler}
            >
                {btn.content}
            </Button>
        );
    });

    return <section className={styles.login__bar}>{renderLogin}</section>;
};

export default LoginBar;
