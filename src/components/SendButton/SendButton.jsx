import React from 'react';
import styles from './SendButton.module.css'
import planeImg from '../../img/send.svg'

const SendButton = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <img src={planeImg} alt="send-img"/>
                <div className={styles.send}>Отправить</div>
            </div>
        </div>
    );
};

export default SendButton;