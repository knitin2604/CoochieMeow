import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { RiWhatsappFill, RiSendPlaneFill } from 'react-icons/ri';
import { MdLocationPin } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import { IoCall } from 'react-icons/io5';
import { useTranslation, withTranslation } from 'react-i18next';
import styles from './Contact.module.css';
const Contact = ({ id }) => {
    const { t } = useTranslation();
    return (
        <section className={`sectiontopPadding ${styles.contact}`} id={id}>
            <div className="container">
                <div className="row">
                    <div className="section_title">
                        <h6 className="title-font">{t('contact-contactHeader')}</h6>
                        <h2 className="pb-3">{t('contact-locationHeader')}</h2>
                    </div>
                </div>
            </div>
            {/* Google map.... */}
            <div data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-offset="0"
                data-aos-once="true"
                >
                <iframe
                    style={{ border: "0", width: "100%", height: "350px" }}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3369.1795477355195!2d75.52224565181393!3d32.38755957375073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1613195436103!5m2!1sen!2sin"
                    frameBorder="0"
                    allowFullScreen
                    title="location-map"
                ></iframe>
            </div>
            {/* contact-information */}
            <div className={styles.contact_wrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-5">
                            <div className={styles.address_box}>
                                <div className={styles.icon_box}>
                                    <span className="mt-1">
                                        <MdLocationPin className={styles.icon} />
                                    </span>
                                </div>
                                <p className="pt-4">{t('contact-address')}</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className={styles.time_box}>
                                <div className={styles.icon_box}>
                                    <span className="mt-1">
                                        <BiTime className={styles.icon} />
                                    </span>
                                </div>
                                <p className="pt-4">{t('contact-openTimes')}</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className={styles.contact_box}>
                                <p className="me-3 pt-4">{t('contact-contactMethods')}</p>
                                <div className={styles.icon_group}>
                                    <div className={styles.icon_box}>
                                        <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=aa.lttrends@gmail.com" target="_blank" rel="noopener noreferrer" class="contact-icon"><FaEnvelope className={styles.icon} /></a>
                                    </div>
                                    <div className={styles.icon_box}>
                                        <a href="tel:+91 98679 10690" class="contact-icon"><IoCall className={styles.icon} /></a>
                                    </div>
                                    <div className={styles.icon_box}>
                                        <a href="//api.whatsapp.com/send?phone=+91 98679 10690" target="_blank" rel="noopener noreferrer" class="contact-icon"><RiWhatsappFill className={styles.icon} /></a>
                                    </div>
                                    <div className={styles.icon_box}>
                                        <a href="https://telegram.me/make605" target="_blank" rel="noopener noreferrer" class="contact-icon"><RiSendPlaneFill className={styles.icon} /></a>
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

export default withTranslation()(Contact);
