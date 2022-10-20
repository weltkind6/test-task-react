import React from 'react';
import styles from './LanguageChange.module.css'

const LanguageChange = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <div style={{color: '#979BAD'}}>Ru   <div className={styles.dote}/></div>
            </div>
            <div style={{color: '#388AF3'}}>En</div>
        </div>
    );
};

export default LanguageChange;