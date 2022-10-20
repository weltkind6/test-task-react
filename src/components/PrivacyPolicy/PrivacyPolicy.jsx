import React from 'react';
import Checkbox from "../CheckBox/Checkbox";
import styles from './PrivacyPolicy.module.css'

const PrivacyPolicy = () => {
    return (
        <div className={styles.wrapper}>
            <Checkbox />
            <div className={styles.text}>Согласен с <a href="#">Политикой конфиденциальности</a></div>
        </div>
    );
};

export default PrivacyPolicy;