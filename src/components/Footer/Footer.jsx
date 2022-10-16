import React from 'react';
import Logo from "../Logo/Logo";
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <Logo />
        </div>
    );
};

export default Footer;