import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import styles from './services.module.css';
import { data, optionMenu } from './Servicedata';
import { useTranslation, withTranslation } from 'react-i18next';


const Services = ({ id }) => {
    const { t } = useTranslation();
    const [option, setOption] = useState('dine_in');

    const menuItems = data.filter(data => data.name === option);
    return (
        <section id={id} className="sectionPadding">
            <div className="container">
                    <div className="section_title">
                        <h6 className="title-font">{t('services-services')}</h6>
                        <h2 className="d-none d-md-block">{t('services-check')}</h2>
                        <h2 className="d-block d-md-none">{t('services-check-mobile')}</h2>
                    </div>
                    <div className="row py-md-5" >
                        <div className="col-lg-3 col-md-12">
                            {/* Tab-bar  added here */}
                            <ul className={styles.tab_btn}>
                                {optionMenu.map((item,i) => (
                                    <li key={i} className={option === item.name && styles.active} onClick={() => setOption(item.name)}>
                                        {t(`${item.displayName}`)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {menuItems.map((item, i) => (
                            <div key={i} className="col-lg-9 col-md-12 order-1 order-lg-2">
                                {/* Tab-option added here  */}
                                <div className={styles.wrapper}>
                                    <div className="col-lg-8 col-md-12">
                                        <div className={styles.content}>
                                            <h3>{t(`${item.title}`)}</h3>
                                            <div className={styles.description}>
                                                <p>{t(`${item.description1}`)}</p>
                                                {/* description2 is here */}
                                                <ReactMarkdown rehypePlugins={[rehypeRaw]} children={t(`${item.description2}`)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-12 order-2 order-lg-1">
                                        <div className={styles.image}>
                                            <img className="d-none d-md-block" src={`img/services/services_desktop/${item.desktop_photo}`} alt="" srcset="" />
                                            <img className="d-block d-md-none" src={`img/services/services_phone/${item.phone_photo}`} alt="" srcset="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    );
};

export default withTranslation()(Services);
