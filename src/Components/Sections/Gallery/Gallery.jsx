import React, { useState, useEffect } from "react";
import { subCategory } from "./Gallerydata";
import "./Gallery.css";
import styles from "./Gallery.module.css";
import { photos } from "./Gallerydata";
import { useTranslation, withTranslation } from "react-i18next";
import FsLightbox from "fslightbox-react";
import ReactModal from "react-modal";
import { subCategories } from "../Gallery/Gallerydata";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};
const Gallery = ({ id }) => {
  
  const [toggler, setToggler] = useState(false);
  const [zoom, setZoom] = useState();
  const { t } = useTranslation();
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [shouldBeColumn, setShouldBeColumn] = useState(false);
  const [imgReady, setImgReady] = useState(false);
  

  {/* object checking condition*/}
  const [items,setItems]= useState(photos);
  const filterItem = (categItem)=> {
    const updatedItems = photos.filter((curItem) =>{
      return curItem.categori === categItem;
    });
    setItems(updatedItems);
  }
 
  {/*for taking size of window*/}
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

   {/*for sizing the content of images*/}
  useEffect(() => {
    if (toggler) {
      const width = document.body.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.width = `${width}px`;
    } else {
      document.body.style.overflow = "visible";
      document.body.style.width = `auto`;
    }
    
    const index = setTimeout(() => {
      if (toggler) {
        const imgClasses = document.getElementsByClassName("modal-img-wrapper");

        for (let img of imgClasses) {
          console.log(img.offsetHeight, img.offsetWidth);
          console.log(windowDimensions.height, windowDimensions.width);
          if (
            img.offsetHeight * 3 + 10 < windowDimensions.height &&
            img.offsetWidth + 10 < windowDimensions.width &&
            windowDimensions.width <= 990
          ) {
            setShouldBeColumn(true);
            console.log("Here");
          } else if (
            img.offsetHeight * 2 + 10 < windowDimensions.height &&
            img.offsetWidth + 10 < windowDimensions.width &&
            windowDimensions.width > 990
          ) {
            setShouldBeColumn(true);
            console.log("Second condition");
          } else {
            setShouldBeColumn(false);
          }
        }
      }
    }, 800);

    return () => {
      document.body.style.overflow = "visible";
      document.body.style.width = `auto`;
      setShouldBeColumn(false);
      clearTimeout(index);
    };
  }, [toggler, windowDimensions]);

  const closeModal = () => {
    setToggler((st) => !st);
    setImgReady(false);
  };
  return (
    <section className={`${styles.gallery} sectionPadding`} id={id}>
      <div className="container-fluid">
        <div className="container">
          {/*for titles*/}
          <div className="section_title">
            <h6 className="title-font" style={{color:"grey"}}>{t("gallery-gallery")}</h6>
            <h2 className="pb-3 d-none d-md-block text-capitalize text-white " >{t("gallery-album")}</h2>
            <h2  className="pb-3 d-block d-md-none text-capitalize cursive">
              {t("gallery-album-mobile")}
            </h2>
          </div>
          {/*for subcategories*/}
          <div className="Category-tabs container">
            <div className="Category-tab d-flex justify-content-center mb-4">

              {subCategory.map((item ) => (
              <li  className="btn"  onClick={() => filterItem(item.name)}>{t(`${item.name}`)}</li>
                         ))}
            </div>
          </div>
          
        <div className="row my-5">
          <div className="row g-1">
           {items.map(( elem,i) => {
            {/*my edit*/}
            const {id,thumbnail_desktop,cover_desktop,cover_phone,title}= elem;
            return(
              <div
              onClick={() => {
                setToggler((st) => !st);
                setImgReady(true);
                setZoom(elem);
              }}
              key={i}
              className={`col-12 col-md-6 col-lg-4 `}
            >
              <div className={styles.wrapper}>
                <img
                  className={`w-100 ${styles.img}`}
                  src={`img/gallery/gallery_desktop/${elem.thumbnail_desktop}`}
                  alt=""
                  srcset=""
                />
                <h6>{t(`${elem.title}`)}</h6>
              </div>
            </div>
            )
          
          
          })
     }
        </div>  
                </div>
                
        </div>
      </div>


      
     { /* For zoom of images on click*/}
      <ReactModal
        isOpen={toggler}
        onRequestClose={closeModal}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        // onClick={() => setToggler((st) => !st)}
      >
        <button className="btn-close" onClick={closeModal}></button>
        <div
          className={styles["modal-content"]}
          onClick={(e) => {
            closeModal();
          }}
          style={{ flexDirection: shouldBeColumn ? "column" : "row" }}
        >
          {/*img1 on zoom*/}
          <div
            className={`${styles["img-wrapper"]} ${styles["img-wrapper-delay"]}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            style={{
              marginRight: shouldBeColumn ? "" : "5px",
              marginBottom: shouldBeColumn ? "5px" : "",
            }}
          >
            <img
              src={
                windowDimensions.width < 990
                  ? `img/gallery/gallery_phone/${zoom?.cover_phone}`
                  : `img/gallery/gallery_desktop/${zoom?.cover_desktop}`
              }
              alt=""
              className={`${toggler ? "img-wrapper-delay" : ""}`}
              onLoad={() => setImgReady(true)}
            />
          </div>
          {/*img2 on zoom*/}
          <div
            className={`${styles["img-wrapper"]} ${styles["img-wrapper-delay"]}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            style={{
              marginLeft: shouldBeColumn ? "" : "5px",
              marginTop: shouldBeColumn ? "5px" : "",
            }}
          >
            <img
              src={
                windowDimensions.width < 990
                  ? `img/gallery/gallery_phone/${zoom?.cover_phone}`
                  : `img/gallery/gallery_desktop/${zoom?.cover_desktop}`
              }
              alt=""
              className={`${
                toggler ? "img-wrapper-delay" : ""
              } modal-img-wrapper`}
            />
          </div>
        </div>
      </ReactModal>
      
    </section>
  );
};

export default withTranslation()(Gallery);
