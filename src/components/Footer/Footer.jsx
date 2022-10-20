import React from 'react';
import Logo from "../Logo/Logo";
import styles from './Footer.module.css'
import SocialBoards from "../SocialBoardsBlock/SocialBoards";
import arrow from '../../img/downloadArrow.svg'

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Logo color="white"/>
                <nav className={styles.navBlock}>
                    <ul className={styles.menuList}>
                        <li className={styles.menuTitle}>
                            <div>Услуги</div>
                            <div className={styles.footerDote}/>
                        </li>
                        <li><a href="#">Support and development</a></li>
                        <li><a href="#">UI/UX and product design</a></li>
                        <li><a href="#">Progressive Web Applications (PWA)</a></li>
                    </ul>
                    <ul className={styles.menuList}>
                        <li className={styles.menuTitle}>
                            <div>Компания</div>
                            <div className={styles.footerDote}/>
                        </li>
                        <li><a href="#">О компании</a></li>
                        <li><a href="#">Проекты</a></li>
                        <li><a href="#">Контакты</a></li>

                    </ul>
                    <ul className={styles.menuList}>
                        <li className={styles.menuTitle}>
                            <div>Контакты</div>
                            <div className={styles.footerDote}/>
                        </li>
                        <li><a href="#">Скачать презентацию </a><img src={arrow} alt="download-arrow"/></li>
                        <li>
                            <a href="tel:+74999999999"> +7 (499) 999-99-99</a>
                        </li>
                        <li>
                            <a href="mailto:info@site.com">info@site.com</a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.privacy}>
                    <a href='#' style={{color: '#FFFFFF'}}>Политика конфиденциальности</a>
                    <div>© Company 2022. All rights reserved.</div>
                </div>
                <SocialBoards/>
            </div>
        </div>
    );
};

export default Footer;