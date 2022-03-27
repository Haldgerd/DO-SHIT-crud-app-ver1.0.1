import React from 'react';
import { useNavigate } from 'react-router-dom';

// --------------- COMPONENTS IMPORT ---------------
import Button from '../../UI/Button';
import Wrapper from '../../wrappers/Wrapper';
import Paragraph from '../../UI/Paragraph';
import styles from './navLinks.module.css';

const links = [
    {
        id: 'link1',
        page: 'login',
        context: 'LOGIN ** LOGIN ** LOGIN ** LOGIN ** LOGIN ** LOGIN ** ',
        path: '/Login',
    },
    {
        id: 'link2',
        page: 'daily',
        context: 'DAILYSHIT ** DAILYSHIT ** DAILYSHIT ** DAILYSHIT ** ',
        path: '/DailyShit',
    },
    {
        id: 'link3',
        page: 'goals',
        context: 'SHITGOALS ** SHITGOALS ** SHITGOALS ** SHITGOALS ** ',
        path: '/YearShit',
    },
    {
        id: 'link4',
        page: 'log',
        context: 'SHITLOG ** SHITLOG ** SHITLOG ** SHITLOG ** SHITLOG ** ',
        path: '/ShitLog',
    },
];

const NavLinks = () => {
    const navigate = useNavigate();

    return (
        <ul className={styles.nav__links}>
            {links.map((link) => {
                return (
                    <li className={styles.nav__link} key={link.id}>
                        <Button
                            buttonClass={styles.nav__button}
                            onClickHandleFunction={() => {
                                navigate(link.path);
                            }}
                        >
                            <p />
                        </Button>
                        <Wrapper wrapperClass={styles.nav__context}>
                            <Paragraph
                                paragraphClass={styles.nav__text}
                                text={link.context}
                            />
                        </Wrapper>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavLinks;
