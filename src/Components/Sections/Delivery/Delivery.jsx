import React from 'react';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { data } from './Deliverydata';
import styles from './delivery.module.css';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useTranslation, withTranslation } from 'react-i18next';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from 'react-intersection-observer';

const Delivery = ({ id }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  })
  const settings = {
    centerPadding: "0px",
    slidesToShow: 4,
    rows: 2,
    autoplay: true,
    dots: false,
    nextArrow: <FaStar className="d-none" />,
    prevArrow: <FaStar className="d-none" />,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          speed: 500,
          rows: 2,
          slidesPerRow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          speed: 500,
          rows: 4,
          slidesPerRow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          speed: 500,
          rows: 1,
          slidesPerRow: 1,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
          autoplay: true,
        }

      }
    ]
  };
  const { t } = useTranslation();
  return (
    <section ref={ref} inView={inView} id={id} className={`${styles.delivery_section} sectionPadding`}>
      <div className="container">
        <div className={`${inView ? 'section_title' : ''}`}>
          <h6 className="title-font">DELIVERY</h6>
          <h2 className="pb-3">Doorstep Delivery</h2>
        </div>
        <p className={`${inView ? 'fade-up' : ''} pb-3`}>Breakfast, lunch or dinner, we deliver right to your doorstep. <a href="tel:+91 98679 10690" className="fontColor01">Call</a> or<a href="//api.whatsapp.com/send?phone=+91 98679 10690" className="fontColor01" target="_blank" rel="noreferrer"> WhatsApp</a> us or simply order below. Timing for orders placed directly with us Sun-Wed: 0930-1630 | Thu: 0930-2230 | Fri: 1030-2330</p>
        <div className="row">
          <div>
            <Slider {...settings}>
              {data.map((item, i) => (
                <div key={i} className={`col-6 col-md-4 col-lg-3 ${inView ? 'card-animation' : ''}`}>
                  <div className={styles.card}>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={t(`${item.title}`)} />
                    <h5><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> <span className={styles.rating}>{t(`${item.rating}`)}</span></h5>
                    <h6>{t(`${item.food_type_range}`)}</h6>
                    <p className={styles.description}>{t(`${item.description}`)}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslation()(Delivery);



