import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { useTranslation } from "react-i18next";

import { IoIosArrowDown } from "react-icons/io";
import styles from './TopBar.module.css';
const TopBar = () => {
    const [Language, setLanguage] = useState('')

    const { i18n } = useTranslation();

    const changeLanguage = lng => {
        setLanguage(lng)
        i18n.changeLanguage(lng);
    };
    return (
        <div className="boundaryColor01">
            <div className="container">
                <div className="row">
                    <div className={styles.wrapper}>
                        <div className={styles.message_box}>
                            <div className={styles.icon_group}>
                                <a href="tel:+91 98679 10690" className="fontColor01"><FaPhoneAlt className={styles.contact_icon} /></a>
                                <a href="//api.whatsapp.com/send?phone=+91 98679 10690" className="fontColor01" target="_blank" rel="noreferrer"> <RiWhatsappFill className={styles.contact_icon} /></a>
                            </div>
                            <div className={styles.time_box}>
                                <button className={styles.time_btn}>Timing <IoIosArrowDown /></button>
                                <div className={styles.box_content}>
                                    <p>Mon-Wed: 07:00 - 22:00</p>
                                    <p>Thu: 07:00 - 23:00</p>
                                    <p>Fri: 07:00 - 12:00 </p>
                                    <p>Sat: 08:00 - 12:30</p>
                                    <p>Sun: 08:00 - 10:00</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.lan_dropdown}>
                            <button className={styles.lan_dropbtn}>{Language ? Language.toUpperCase() : 'EN'}<IoIosArrowDown /></button>
                            <div className={styles.lan_dropdown_content}>
                                <p onClick={() => changeLanguage('ar')}>AR</p>
                                <p onClick={() => changeLanguage('en')}>EN</p>
                                <p onClick={() => changeLanguage('es')}>ES</p>
                                <p onClick={() => changeLanguage('fr')}>FR</p>
                                <p onClick={() => changeLanguage('gu')}>GU</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;