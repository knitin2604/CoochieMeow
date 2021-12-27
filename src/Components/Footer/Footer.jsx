import React from 'react';
import styles from './Footer.module.css';
import { CgFacebook, CgInstagram } from 'react-icons/cg';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import { useTranslation, withTranslation } from 'react-i18next';
const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <div className={styles.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.social_link}>
                                <span>{t('footer-SMFollow')}</span>
                                <div className={styles.icon_box}>
                                    <a href="https://www.facebook.com/SigBowls"><CgFacebook /></a>
                                </div>
                                <div className={styles.icon_box}>
                                    <a href="https://www.instagram.com/amit.agarwal.1426"><CgInstagram /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.important_link}>
                                <span><MdKeyboardArrowRight /><Link to="about">{t('footer-about')}</Link></span>
                                <span><MdKeyboardArrowRight /><Link to="">{t('footer-terms')}</Link></span>
                                <span><MdKeyboardArrowRight /><Link to="">{t('footer-privacy')}</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.footer_text}>
                            <p className="pt-3 text-center">© {t('footer-copyright1')} <span>{t('footer-DF')}</span>. {t('footer-copyright2')}</p>
                            <p>{t('footer-designer')} <a href="https://koyosoftware.web.app/"><span>{t('footer-designerFirm')}</span></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default withTranslation()(Footer);
