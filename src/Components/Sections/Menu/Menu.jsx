import React, { useEffect, useState } from 'react';
import styles from './menu.module.css';
import { subCategories, menu } from './Menudata.js';
import { useTranslation, withTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const MenuList = ({ id }) => {
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true
    })
    const { t } = useTranslation();
    const [Season, setSeason] = useState('summer')
    const [type, setVegType] = useState('veg')
    const [item, setItem] = useState([])
    const [subCategory, setCategory] = useState([])

    useEffect(() => {

        let menuItems = menu?.filter(item => item.season.includes(Season))
        setItem(menuItems)
        type && setItem(menuItems.filter(veg => veg.vegType.includes(type)));
        let sub_Categories = subCategories?.filter(c => c.season.includes(Season));
        Season && setCategory(sub_Categories)
    }, [Season, type])

    return (
        <section ref={ref} inView={inView} id={id} className={`backgroundColor03 sectionPadding ${styles.menu_section}`}>
            <div className="container">
                <div className="menu">
                    <div className={`${inView ? 'section_title' : ''}`}>
                        <h6 className="title-font">{t('menu-menu')}</h6>
                        <h2 className="d-none d-md-block">{t('menu-check')}</h2>
                        <h2 className="d-block d-md-none">{t('menu-check-mobile')}</h2>
                    </div>
                    <p className={`${inView ? 'fade-up' : ''}`}>
                        15% surcharge applies on public holidays
                    </p>
                    <div className={`${inView ? 'fade-up' : ''} row`} >
                        <div className="col-sm-12">
                            <div className={styles.fiter_item}>
                                <div className={styles.btn}>
                                    <button className={Season === "summer" && styles.active} onClick={() => { setSeason('summer'); setVegType('veg') }}>Summer</button>
                                    <button className={Season === "winter" && styles.active} onClick={() => { setSeason('winter'); setVegType('veg') }}>Winter</button>
                                </div>
                                <ul className={styles.type_btn}>
                                    {subCategory.map((item, i) => (
                                        <li key={i} className={type === item.name && styles.active_color} onClick={() => setVegType(item.name)}>{t(`${item.displayName}`)}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`${inView ? 'fade-up' : ''} row gx-sm-5 gx-md-5`}>
                        {/* filtered menu items */}
                        {
                            item.map(item => (
                                <div className="col-sm-12 col-md-6">
                                    <div className={styles.menu_card}>
                                        <div className={styles.img}>
                                            <img className={styles.image} src={`img/menu/${item.photo}`} alt="" srcset="" />
                                        </div>
                                        <div className={styles.wrapper}>
                                            <div className={styles.content}>
                                                <span className={styles.title}>
                                                    {t(`${item.title}`)}
                                                </span>
                                                <span className={styles.Price}>{t(`${item.price}`)}</span>
                                            </div>
                                            <p>
                                                {t(`${item.description}`)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withTranslation()(MenuList);