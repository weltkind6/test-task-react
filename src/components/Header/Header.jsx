import React from 'react';
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from './Header.module.css'

const Header = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <Logo color={'black'}/>
                <MobileMenu/>
            </div>
        </div>
    );
};

export default Header;