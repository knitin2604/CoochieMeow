import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa';
import styles from './whyus.module.css';
import { data } from './Whyusdata';
import { useInView } from 'react-intersection-observer';

const WhyUs = ({ id }) => {
    const { t } = useTranslation();
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true
    })
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        nextArrow: <FaStar className="d-none" />,
        prevArrow: <FaStar className="d-none" />,
        responsive: [
            {
                breakpoint: 1021,
                settings: {
                    slidesToShow: 3,
                    rows: 1,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    rows: 1,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    rows: 1,
                    slidesPerRow: 1,
                }

            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    rows: 1,
                    slidesPerRow: 1,
                }

            }
        ],
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };
    return (
        <section ref={ref} inView={inView} id={id} className={`backgroundColor02 sectionPadding`}>
            <div className="container">
                <div className={`${inView ? 'section_title' : ''}`}>
                    <h6 className={styles.title_font}>{t('whyUs-whyUs')}</h6>
                    <h2 className="d-none d-md-block">{t('whyUs-desiFirangi')}</h2>
                    <h2 className="d-block d-md-none">{t('whyUs-desiFirangi-mobile')}</h2>
                </div>
                <Slider className="d-none d-lg-block" {...settings}>
                    {/* kept same animation that was before */}
                    {data.map((item, i) => (
                        <div key={i} className={`${inView ? 'card-animation' : ''} ${item.delay}`}>
                            <div className={styles.card}>
                                <div className={styles.card_body}>
                                    <span>{t(`${item.count}`)}</span>
                                    <h3>{t(`${item.title}`)}</h3>
                                </div>
                                <p>{t(`${item.description}`)}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
                <Slider className="d-block d-lg-none" {...settings}>
                    {data.map((item, i) => (
                        <div key={i}>
                            <div className={styles.card}>
                                <div className={styles.card_body}>
                                    <span>{t(`${item.count}`)}</span>
                                    <h3>{t(`${item.title}`)}</h3>
                                </div>
                                <p>{t(`${item.description}`)}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default withTranslation()(WhyUs);

