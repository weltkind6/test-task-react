import React from 'react';
import whatsApp from '../../img/whatsapp.svg'
import telegram from '../../img/telegram.svg'
import styles from './SocialBoars.module.css'

const SocialBoards = () => {
    return (
        <div className={styles.wrapper}>
            <a href="#">
                <img src={telegram} alt="telegram-icon" className={styles.socialIcon}/>
            </a>
            <a href="#">
                <img src={whatsApp} alt="whatsApp-icon" className={styles.socialIcon}/>
            </a>
        </div>
    );
};

export default SocialBoards;