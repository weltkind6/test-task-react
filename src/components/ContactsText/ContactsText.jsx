import React from 'react';
import Title from "../Title/Title";
import styles from './ContactsText.module.css'

const ContactsText = () => {
    return (
        <div className={styles.wrapper}>
            <Title/>
            <p className={styles.text}>
                Заполните форму ниже и мы свяжемся с вами.
                Не любите формы? Напишите нам на почту <a href="mailto:info@site.com" className={styles.link}>info@site.com</a>
            </p>
        </div>
    );
};

export default ContactsText;