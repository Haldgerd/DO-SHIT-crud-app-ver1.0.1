import React from 'react';
import { useNavigate } from 'react-router-dom';

// --------------- COMPONENTS IMPORT ---------------
import NavLink from './NavLink';
import styles from './navLinks.module.css';

const LINKS_CONTENT = [
    {
        id: 'link1',
        context: 'MENU ** MENU ** MENU ** MENU ** MENU ** MENU ** ',
        path: '/Login',
        icon: 'pixelarticons:login',
    },
    {
        id: 'link2',
        context: 'EXPLORE ** EXPLORE ** EXPLORE ** EXPLORE ** EXPLORE',
        path: '/DailyShit',
        icon: 'simple-icons:azuredataexplorer',
    },
    {
        id: 'link3',
        context: 'ABOUT ** ABOUT ** ABOUT ** ABOUT ** ABOUT ** ABOUT ',
        path: '/YearShit',
        icon: 'ci:list-checklist-alt',
    },
    {
        id: 'link4',
        context: 'CONTACT ** CONTACT ** CONTACT ** CONTACT ** CONTACT ',
        path: '/ShitLog',
        icon: 'pixelarticons:contact-plus',
    },
];

const NavLinks = () => {
    const navigate = useNavigate();

    const navLinks = LINKS_CONTENT.map((link) => {
        return (
            <NavLink
                key={link.id}
                icon={link.icon}
                context={link.context}
                path={() => {
                    navigate(link.path);
                }}
            />
        );
    });

    return <menu className={styles.nav__links}>{navLinks}</menu>;
};

export default NavLinks;
