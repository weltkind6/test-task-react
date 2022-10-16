import React from 'react';
import Checkbox from "../CheckBox/Checkbox";
import styles from './PrivacyPolicy.module.css'

const PrivacyPolicy = () => {
    return (
        <div className={styles.wrapper}>
            <Checkbox />
            <p className={styles.text}>Согласен с <a href="#">Политикой конфиденциальности</a></p>
        </div>
    );
};

export default PrivacyPolicy;