import React from 'react';
import styles from './StartProjectButton.module.css'
import startButtonArrow from '../../img/startButtonArrow.svg'

const StartProjectButton = () => {
    return (
        <div className={styles.wrapper}>
            <a href="#">
                <img
                src={startButtonArrow}
                alt="start-button-arrow"
                className={styles.img}
            />
            </a>
            <div className={styles.circle}/>
        </div>
    );
};

export default StartProjectButton;