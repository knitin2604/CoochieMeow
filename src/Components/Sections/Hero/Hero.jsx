import React, { useState } from 'react';
import styles from './Hero.module.css';
import { Link } from "react-scroll";
import { useTranslation, withTranslation } from 'react-i18next';
import ModalVideo from 'react-modal-video';
import { useInView } from 'react-intersection-observer';

const Hero = ({ id }) => {
    const [isOpen, setOpen] = useState(false)
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true
    })
    const { t } = useTranslation();
    return (
        <section ref={ref} inView={inView} id={id} className={styles.hero_section}>
            <div className="container">
                <div className={`${inView ? 'zoom-in-zoom-out' : ''} row`}>
                    <div className="col-sm-8">
                        <div className={styles.hero_content}>
                            <h1 className="text-white mb-3">{t('webHeader-welcome')} <span className="fontColor01">{t('webHeader-DesiFirangi')}</span></h1>
                            <h4 className="text-white mb-4">{t('webHeader-freshPrep')} <span className="fontColor01">{t('webHeader-G&G')} </span> {t('webHeader-onWheels')}</h4>
                            <div>
                                <div className={styles.b_group}>
                                    <Link to="menu"
                                        smooth={true}
                                        offset={-70}
                                        duration={200}>
                                        {t('webHeader-menu')}
                                    </Link>
                                    <Link to="gallery"
                                        smooth={true}
                                        offset={-70}
                                        duration={200}>
                                        {t('webHeader-gallery')}
                                    </Link>
                                    <Link to="delivery"
                                        smooth={true}
                                        offset={-70}
                                        duration={200}>
                                        {t('webHeader-delivery')}
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                        <span onClick={() => setOpen(true)} className={styles.play_btn}></span>
                    </div>
                </div>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L-OTvvkbqZE" onClose={() => setOpen(false)} />
            </div>
        </section>
    );
};

export default withTranslation()(Hero);
