import React, {useState} from 'react';
import styles from './DesctopMenu.module.css'
import classNames from "classnames";

const DescTopMenu = () => {

    const [isFirstClicked, setIsFirstClicked] = useState(false)
    const [isSecondClicked, setIsSecondClicked] = useState(false)
    const [isThirdClicked, setIsThirdClicked] = useState(false)

    const firstClickHandler = () => {
        setIsFirstClicked(true)
        setIsSecondClicked(false)
        setIsThirdClicked(false)
    }
    const secondClickHandler = () => {
        setIsSecondClicked(true)
        setIsFirstClicked(false)
        setIsThirdClicked(false)
    }
    const thirdClickHandler = () => {
        setIsThirdClicked(true)
        setIsSecondClicked(false)
        setIsFirstClicked(false)
    }

    return (
        <div className={styles.wrapper}>
            <nav>
                <ul className={styles.descTopMenuNav}>
                    <li className={styles.link}>
                        <a
                            href="#"
                            className={classNames(isFirstClicked ? styles.color2 : styles.color1)}
                            onClick={firstClickHandler}
                        >
                            Проекты
                        </a>
                        {isFirstClicked && <div className={styles.dote}/>}
                    </li>
                    <li className={styles.link}>
                        <a
                            href="#"
                            className={classNames(isSecondClicked ? styles.color2 : styles.color1)}
                            onClick={secondClickHandler}
                        >
                            О компании
                        </a>
                        {isSecondClicked && <div className={styles.dote}/>}
                    </li>
                    <li className={styles.link}>
                        <a
                            href="#"
                            className={classNames(isThirdClicked ? styles.color2 : styles.color1)}
                            onClick={thirdClickHandler}
                        >Контакты
                        </a>
                        {isThirdClicked && <div className={styles.dote}/>}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DescTopMenu;