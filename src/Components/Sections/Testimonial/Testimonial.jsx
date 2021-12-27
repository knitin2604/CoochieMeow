import React from 'react';
import Slider from "react-slick";
import { useTranslation, withTranslation } from 'react-i18next';
import { FaStar } from 'react-icons/fa';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import styles from './testimonial.module.css';
import { data } from './Testimonialdata.js';

const Testimonial = () => {
    const { t } = useTranslation();
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
                    speed: 1000,
                    autoplaySpeed: 4000,
                    rows: 1,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2,
                    speed: 1000,
                    autoplaySpeed: 4000,
                    rows: 1,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    speed: 1000,
                    autoplaySpeed: 4000,
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
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
        <section className="backgroundColor03 sectionPadding">
            <div className="container">
                <div className="hero_text" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                    <h6 className="title-font">{t('Testimonials-custReviews')}</h6>
                    <h2>{t('Testimonials-whatTheySay')}</h2>
                </div>
                <div className="row" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                        <Slider {...settings}>
                            {data.map((item, i) => (
                                <div key={i}>
                                    <div className={styles.test_card}>
                                        <p className="pt-2 pb-3">
                                            <ImQuotesLeft className="fs-5" />
                                            <span className="px-3">{item.description}</span>
                                            <ImQuotesRight className="fs-5" />
                                        </p>
                                        <div className={styles.content}>
                                            <img src={`img/testimonials/${item.photo}`} alt="" srcset="" />
                                            <h6>{item.name}</h6>
                                            <p>{item.profession}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                </div>
            </div>
        </section>
    );
};

export default withTranslation()(Testimonial);