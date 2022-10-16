import React from 'react';
import styles from './ContactsForm.module.css'
import {FormGroup, Input, Label} from "reactstrap";
import SendButton from "../SendButton/SendButton";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";

const ContactsForm = () => {
    return (
        <div>
            <div className={styles.formWrapper}>
                <FormGroup floating>
                    <Input
                        id="name"
                        name="text"
                        placeholder="Email"
                        type="text"
                        className={styles.input}
                    />
                    <Label for="name">
                        <span className={styles.placeholder}>Ваше имя</span> <span className={styles.require}/>
                    </Label>
                </FormGroup>
            </div>
            <div className={styles.formWrapper}>
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                        className={styles.input}
                    />
                    <Label for="exampleEmail">
                        <span className={styles.placeholder}>Ваш E-Mail</span> <span className={styles.require}/>
                    </Label>
                </FormGroup>
            </div>
            <div className={styles.formWrapper}>
                <FormGroup floating>
                    <Input
                        id="name"
                        name="text"
                        placeholder="Email"
                        type="text"
                        className={styles.input}
                    />
                    <Label for="name">
                        <span className={styles.placeholder}>Комментарий</span> <span className={styles.require}/>
                    </Label>
                </FormGroup>
            </div>
            <PrivacyPolicy />
            <SendButton/>
        </div>
    );
};

export default ContactsForm;