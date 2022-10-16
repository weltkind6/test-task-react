import React from 'react';
import styles from './MainContacts.module.css'

const MainContacts = () => {
    return (
        <div className={styles.wrapper}>
            <a href="#">Главная</a>
            <span>-</span>
            <div className={styles.contacts}>Контакты</div>
        </div>
    );
};

export default MainContacts;