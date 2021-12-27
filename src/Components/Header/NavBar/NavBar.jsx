import React, { useState } from 'react';
import { TiThMenu, TiTimes } from 'react-icons/ti';
import { Link } from "react-scroll";
import { withTranslation, useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';
import { data } from './NavbarData';
import Nav_logo from '../../../assets/img/logo/logo.png';

const NavBar = () => {
    const { t } = useTranslation();
    const [fixed, setFixed] = useState(false);
    const [show, setshow] = useState(false);

    const scrollHandler = () => {

        if (window.scrollY >= 36) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    }
    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", () => {
        setshow(false)
    });

    return (
        <nav id={styles.NavBar} className={`${fixed ? styles.navbar_fixed : ""} backgroundColor01 p-0  navbar navbar-expand-lg`}>
            <div className="container p-1">
                <a className={fixed ? styles.sticky_navbar_brand : styles.navbar_brand} href="/">
                    <img className={styles.navbar_logo} src={Nav_logo} alt={t('navBar-navTitle')} srcset="" /> <span className="ms-2">{t('navBar-navTitle')}</span>
                </a>
                <div onClick={() => setshow(true)} className={styles.toggle_btn}>
                    <TiThMenu className="fs-3" data-bs-toggle="modal" />
                </div>
                <div className={styles.navbar_nav}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {data.map((item, i) => (
                            <li key={i} className={fixed ? styles.sticky_nav_item : styles.nav_item}>
                                <Link to={item.to} activeClass={styles.active}
                                    spy={true}
                                    smooth={true}
                                    offset={item.offset}
                                    duration={200}>
                                    {t(`navBar-${item.to}`)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* only for tablet and mobile devices */}

                <div className={show ? styles.m_navbar : styles.m_hidden}>
                    <div className={styles.modal_backdrop}>
                        <div className={styles.m_modal_dialog}>
                            <div className={`${styles.m_modal_content} modal-content w-auto`}>
                                <div onClick={() => setshow(false)} className={styles.m_close_btn}>
                                    <TiTimes className="fs-2" />
                                </div>
                                <ul className={styles.m_nav_item}>
                                    {data.map((item, i) => (
                                        <li key={i} className={styles.m_nav_item}>
                                            <Link onClick={() => setshow(false)} to={item.to} activeClass={styles.active}
                                                spy={true}
                                                smooth={true}
                                                offset={-58}
                                                duration={200}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default withTranslation()(NavBar);

