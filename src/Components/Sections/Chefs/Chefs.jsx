import React, { useState } from 'react';
import { CgFacebook, CgInstagram } from 'react-icons/cg';
import { IoLogoLinkedin } from 'react-icons/io';
import styles from './Chefs.module.css';
import { useTranslation, withTranslation } from 'react-i18next';
import chef_photo from '../../../assets/img/chefs/masterChef_combined.jpg';

const Chefs = ({ id }) => {
    const [visible, setVisible] = useState(false)
    const clickHandler = () => {
        setVisible(true)
        setTimeout(() => {
            setVisible(false)
        }, 2500);
    }
    const { t } = useTranslation();
    return (
        <section onClick={() => clickHandler()} id={id} className={`${visible && styles.bg_none} ${styles.chef_section}`}>
            <div className={visible && styles.hide_chefs}>
                <div className="container">
                    <div className="row">
                        <div className="section_title">
                            <h6 className="title-font">{t('chef-chef')}</h6>
                            <h2 className="pb-4">{t('chef-ourChef')}</h2>
                        </div>
                        <div className="col-md-6 col-lg-4" >
                            <div className={styles.card}>
                                <div onClick={(e) => e.stopPropagation()} className={styles.chefs_img}>
                                    <img src={chef_photo} alt="" srcset="" />
                                </div>
                                <div onClick={(e) => e.stopPropagation()} className={styles.main}>
                                    <div className={styles.hover_content}>
                                        <div className={styles.title}>
                                            <h4>{t('chef-chefName')}</h4>
                                            <h6>{t('chef-chefDesignation')}</h6>
                                        </div>
                                        <div className={styles.social_icon}>
                                            <a href="https://www.facebook.com/amit.agarwal.1426" target="_blank" rel="noreferrer"><CgFacebook className={styles.icon} /></a>
                                            <a href="https://www.instagram.com/amit.agarwal.1426" target="_blank" rel="noreferrer"><CgInstagram className={styles.icon} /></a>
                                            <a href="https://www.linkedin.com/in/amit-agarwal-635a548" target="_blank" rel="noreferrer"><IoLogoLinkedin className={styles.icon} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withTranslation()(Chefs);