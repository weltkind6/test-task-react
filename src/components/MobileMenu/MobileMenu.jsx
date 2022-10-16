import React from 'react';
import MobileMenuDote from "../MobileMenuDote/MobileMenuDote";
import styles from './MobileMenu.module.css'

const MobileMenu = () => {
    return (
        <div className={styles.wrapper}>
            <MobileMenuDote />
            <MobileMenuDote />
            <MobileMenuDote />
        </div>
    );
};

export default MobileMenu;