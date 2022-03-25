import React from 'react';
// import { useNavigate } from 'react-router-dom';

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
    },
    {
        id: 'link2',
        page: 'daily',
        context: 'DAILYSHIT ** DAILYSHIT ** DAILYSHIT ** DAILYSHIT ** ',
    },
    {
        id: 'link3',
        page: 'goals',
        context: 'SHITGOALS ** SHITGOALS ** SHITGOALS ** SHITGOALS ** ',
    },
    {
        id: 'link4',
        page: 'log',
        context: 'SHITLOG ** SHITLOG ** SHITLOG ** SHITLOG ** SHITLOG ** ',
    },
];

const NavLinks = () => {
    // let navigate = useNavigate();

    return (
        <ul className={styles.nav__links}>
            {links.map((link) => {
                return (
                    <li className={styles.nav__link}>
                        <Button
                            buttonContent="icon"
                            buttonClass={styles.nav__button}
                            onClickHandleFunction={() => {
                                console.log(link.page);
                            }}
                        />
                        <Wrapper wrapperClass={styles['nav__context-wrapper']}>
                            <Paragraph
                                paragraphClass={styles.nav__context}
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
