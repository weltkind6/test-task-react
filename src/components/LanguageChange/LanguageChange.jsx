import React, {useState} from 'react';
import styles from './LanguageChange.module.css'
import classNames from "classnames";

const LanguageChange = () => {

    const [isRuClicked, setIsRuClicked] = useState(true)
    const [isEnClicked, setIsEnClicked] = useState(false)

    const ruClickHandler = () => {
        setIsRuClicked(true)
        setIsEnClicked(false)
    }
    const enClickHandler = () => {
        setIsRuClicked(false)
        setIsEnClicked(true)
    }

    return (
        <div className={styles.wrapper}>
            <div>
                <div
                    className={classNames(styles.color1, isRuClicked && styles.color2)}
                    onClick={ruClickHandler}>Ru {isRuClicked && <div className={styles.dote}/>}
                </div>
            </div>
            <div
                className={classNames(isEnClicked ? styles.color2 : styles.color1)}
                onClick={enClickHandler}>En {isEnClicked && <div className={styles.dote}/>}</div>
        </div>
    );
};

export default LanguageChange;