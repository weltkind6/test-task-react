import React, {useState} from 'react';
import styles from './ContactsForm.module.css'
import {FormGroup, Input, Label} from "reactstrap";
import SendButton from "../SendButton/SendButton";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";

const ContactsForm = () => {
    const [submitting, setSubmitting] = useState(false);
    const [input, setInput] = useState('')
    const [isValidInput, setIsValidInput] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        setIsValidInput(event.target.checkValidity())
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
        }, 2000)
    }

    return (
        <div>
            {submitting &&
                <div>Submitting Form...</div>
            }
            <form className={styles.inputContainer} id="login" onSubmit={handleSubmit}>
                <div className={styles.form}>
                    <div className={styles.formWrapper}>
                        <FormGroup floating>
                            <Input
                                id="name"
                                name="text"
                                placeholder="Email"
                                type="text"
                                className={styles.input}
                                required={true}
                                onChange={e => setInput(e.target.value)}
                                value={input}

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
                                required={true}
                            />
                            <Label for="exampleEmail">
                                <span className={styles.placeholder}>Ваш E-Mail</span> <span
                                className={styles.require}/>
                            </Label>
                        </FormGroup>
                    </div>
                </div>
                <div className={styles.formWrapper}>
                    <FormGroup floating>
                        <Input
                            id="name"
                            name="text"
                            placeholder="Email"
                            type="text"
                            className={styles.input}
                            required={true}
                        />
                        <Label for="name">
                            <span className={styles.placeholder}>Комментарий</span> <span className={styles.require}/>
                        </Label>
                    </FormGroup>
                </div>
                <SendButton input={input} isValidInput={isValidInput}/>
            </form>
            <PrivacyPolicy/>
        </div>
    );
};

export default ContactsForm;