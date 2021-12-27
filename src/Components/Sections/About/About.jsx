import React, { useState } from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { useTranslation, withTranslation } from 'react-i18next';
import About_img_desktop from '../../../assets/img/about/aboutOverlay_desktop.jpg';
import About_img_phone from '../../../assets/img/about/aboutOverlay_phone.jpg';
import styles from './About.module.css';
import { useInView } from 'react-intersection-observer';
const About = ({ id }) => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false)
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true
    })
    const [trouch, setTrouch] = useState(false)
    const clickHandler = () => {
        setVisible(true)
        setTimeout(() => {
            setVisible(false)
        }, 2500);
    }
    const phoneCLickHandler = () => {
        setTrouch(true)
        setTimeout(() => {
            setTrouch(false)
        }, 700);
    }
    return (
        <section inView={inView} ref={ref} onClick={() => clickHandler()} id={id} className={`${visible && styles.opacity} ${styles.about}`}>
            <div className={visible && styles.hide_container}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={`${inView ? 'section_title' : ''}`}>
                                <h6 className="title-font">{t('about-about')}</h6>
                                <h2 className="pb-4">{t('about-more')}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div onClick={(e) => e.stopPropagation()} className={`col-md-12 col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0`}>
                                <div onClick={() => phoneCLickHandler()} className={`${inView ? 'section_title' : ''} ${styles.about_img} ${trouch && styles.about_img_phone}`}>
                                    {/* zoom from 50% to 35% */}
                                    <img className={`d-none d-md-block`} src={About_img_desktop} alt={t('about-altText')} srcset="" />
                                    <img className={`d-block d-md-none`} src={About_img_phone} alt={t('about-altText')} srcset="" />
                                </div>
                            </div>
                            {/* text content also zoom */}
                            <div className={`${inView ? 'fade-up' : ''} col-md-12 col-lg-6 order-2 order-lg-1 position-relative`}>
                                <h2 className="text-white">{t('about-spot')}</h2>
                                <h6 className="pb-3">{t('about-location')}</h6>
                                <h6>{t('about-range')}</h6>
                                <p><BiCheckCircle className="fontColor01 fs-4" /> {t('about-fastPrep')}</p>
                                <p><BiCheckCircle className="fontColor01 fs-4" /> {t('about-variety')}</p>
                                <p><BiCheckCircle className="fontColor01 fs-4" /> {t('about-vegNonvegSeparation')}</p>
                                <h6>{t('about-possibilities')}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default withTranslation()(About);