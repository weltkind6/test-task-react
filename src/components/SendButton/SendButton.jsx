import React, {useState} from 'react';
import styles from './SendButton.module.css'
import planeImg from '../../img/send.svg'
import classNames from "classnames";

const SendButton = () => {
    const [animate, setAnimate] = useState(false);
    const [isMessageSend, setIsMessageSend] = useState(false)
    const handleClick = () => {
        setAnimate(!animate)
        setTimeout(() => {
            setIsMessageSend(true)
        }, 2000)
    };

    return (
        <div className={classNames(styles.wrapper, isMessageSend && styles.wrapperSent)}  onClick={handleClick}>
            {isMessageSend ? <div className={styles.sentMessage}>Ваше сообщение отправлено!</div> : (
                <div className={classNames(styles.container)}>
                    <img
                        src={planeImg}
                        alt="send-img"
                        className={classNames(
                            styles.animate,
                            animate && styles.grow
                        )}
                    />
                    <div className={styles.send}>Отправить</div>
                </div>
            )}
        </div>
    );
};

export default SendButton;