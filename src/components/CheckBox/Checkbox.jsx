import React from 'react';
import {Form, FormGroup, Input, Label} from "reactstrap";
import styles from './Checkbox.module.css'

const Checkbox = () => {
    return (
        <div>
            <Form>
                <FormGroup check inline>
                    <Input type="checkbox" className={styles.checkbox}/>
                </FormGroup>
            </Form>
        </div>
    );
};

export default Checkbox;