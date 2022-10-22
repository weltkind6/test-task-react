import React from 'react';
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from './Header.module.css'
import LanguageChange from "../LanguageChange/LanguageChange";
import StartProjectButton from "../StartProjectButton/StartProjectButton";
import DescTopMenu from "../DescTopMenu/DesctopMenu";

const Header = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <Logo color={'black'}/>
                <MobileMenu/>
                <DescTopMenu />
               <div className={styles.descTop}>
                   <LanguageChange />
                   <div className={styles.startProject}>
                       <a href="#" className={styles.headerTitle}>Начать проект</a>
                       <StartProjectButton />
                   </div>
               </div>
            </div>
        </div>
    );
};

export default Header;